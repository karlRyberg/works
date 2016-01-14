/// <reference path="util.js" />
/// <reference path="Trucks.js" />
/// <reference path="jquery/jquery-1.7.2.min.js" />

var Truck = (function () {

    var me = {};

    var imageConsts = {
        Min: null,
        Max: null,
        Step: null,
        Width: null,
        Height: null,
        BasePath: null
    }

    var InitIndex = 0;
    var Images = [];
    var EventGrabber = null;
    var Container = null;
    var CurrentTruck = null;
    var CurrentView = null;

    var snapPoints;

    var _pointList;
    var pointList = function () {
        if (_pointList) return _pointList;

        _pointList = [];

        for (p in snapPoints) {
            _pointList.push(snapPoints[p]);
        }

        return _pointList;
    }

    var _scaledSize = null;
    var scaledSize = function () {
        if (_scaledSize) return _scaledSize;

        var stage = { width: Container.innerWidth(), height: Container.innerHeight() };
        var image = { width: 0, height: 0 };

        var imageRatio = imageConsts.Height / imageConsts.Width; // < 1 = landscape, 1 = square, > 1 = portrait
        var stageRatio = stage.height / stage.width; // < 1 = landscape, 1 = square, > 1 = portrait

        image.width = stage.width;
        image.height = image.width * imageRatio;

        if (image.height > stage.height) {

            image.height = stage.height;
            image.width = image.height * (imageConsts.Width / imageConsts.Height);
        }

        _scaledSize = { imageWidth: image.width, imageHeight: image.height, stageWidth: stage.width, stageHeight: stage.height };

        return _scaledSize;
    }

    var setView = function (frame) {
        for (point in snapPoints) {
            if (snapPoints[point] == frame) {
                CurrentView = point;
                return;
            }
        }
    }

    var Directions = {
        left: 1,
        right: -1
    }


    var animating = false;
    var dragDirection;
    var currentIndex;
    var currentParent;

    var _lastTruck = null;

    var enterFrame = function (index, callback) {
        Images[currentIndex].hide();
        currentIndex = index;
        Images[currentIndex].show();
        if (callback) callback();
    }

    var Preload = function (parent, callback) {

        Container.empty();
        Images = [];
        var numLoaded = 0;

        for (var i = imageConsts.Min; i <= imageConsts.Max; i += imageConsts.Step) {

            var imgSrc = imageConsts.BasePath + Util.ZeroPad(i, 4) + '.jpg';

            var imgObj = $('<img/>').attr({
                'id': 'Truck_img_' + i,
                'class': 'Truck-img',
                'width': scaledSize().imageWidth,
                'height': scaledSize().imageHeight
            }).css({
                'position': 'absolute',
                'width': scaledSize().imageWidth + 'px',
                'height': scaledSize().imageHeight + 'px',
                'top': ((scaledSize().stageHeight - scaledSize().imageHeight) / 2) + 'px',
                'left': ((scaledSize().stageWidth - scaledSize().imageWidth) / 2) + 'px'
            }).appendTo(Container).hide();

            var max = imageConsts.Max;
            var step = imageConsts.Step;

            imgObj.load(function () {
                var percent = Math.floor((numLoaded / (max / step)) * 100);
                numLoaded++;

                if (_lastTruck != CurrentTruck) {
                    // $('#truck-loader-percent').html(percent + '%');
                }
                if (numLoaded == max / step) {
                    //  $('#truck-loader-percent').html('');
                    _lastTruck = CurrentTruck;
                    if (callback) callback();
                }
            });

            Images.push(imgObj);
            imgObj.attr('src', imgSrc);

        }

        enterFrame(currentIndex);
    }

    var velBuild = 0;

    var Drag = function (vel) {

        if (animating || vel == 0) return;

        dragDirection = vel > 0 ? Directions.left : Directions.right;

        var newIndex = currentIndex;

        vel = (vel * 0.1) + velBuild;
        velBuild = Math.abs(vel) < 1 ? (velBuild + vel) : 0;

        vel = Math.round(vel);

        for (var i = 0; i < Math.abs(vel); i++) {
            newIndex += dragDirection;
            if (dragDirection > 0 && newIndex >= Images.length) newIndex = 0;
            if (dragDirection < 0 && newIndex < 0) newIndex = Images.length - 1;
        }

        enterFrame(newIndex);
    }


    var findClosestLeft = function () {

        var nextPos;
        var dist = Number.MAX_VALUE;
        var pList = pointList();
        var startIndex = currentIndex;

        if (startIndex > pList[pList.length - 1]) startIndex = pList[0] - 1;

        for (var i = 0; i < pList.length; i++) {
            var currDist = pList[i] - startIndex;
            if (currDist >= 0 && currDist < dist) {
                nextPos = pList[i];
                dist = currDist;
            }
        }

        return nextPos;
    }

    var findClosestRight = function () {

        var nextPos;
        var dist = Number.MAX_VALUE;
        var pList = pointList();
        var startIndex = currentIndex;

        if (startIndex <= pList[0]) startIndex = pList[pList.length - 1] + 1;

        for (var i = pList.length - 1; i >= 0; i--) {

            var currDist = startIndex - pList[i];
            if (currDist > 0 && currDist < dist) {
                nextPos = pList[i];
                dist = currDist;
            }
        }

        return nextPos;
    }

    var findClosest = function (dir) {
        var dist;

        var cnt = currentIndex;
        for (var i = 0; i < Images.length; i++) {
            if (cnt == snapPoints.front || cnt == snapPoints.left || cnt == snapPoints.back || cnt == snapPoints.right) {
                dist = Math.abs(currentIndex - cnt);
                break;
            }
            cnt += dir;
            if (cnt < 0) {
                cnt = Images.length - 1;
            }
            else if (cnt >= Images.length) {
                cnt = 0;
            }
        }
        return { distance: dist, frameNumber: cnt };
    }

    var Snap = function () {

        var frontCheck = findClosest(Directions.left);
        var backCheck = findClosest(Directions.right);

        var target;
        var direction;

        if (backCheck.distance == 0 || frontCheck.distance == 0) {
            setView(currentIndex);
            if (me.onSnap) me.onSnap();
            return;
        }
        else if (backCheck.distance < frontCheck.distance) {
            target = backCheck.frameNumber;
            direction = Directions.right;
        }
        else {
            target = frontCheck.frameNumber;
            direction = Directions.left;
        }


        setTimeout(function () {
            AnimToFrame(target, direction);
        }, 100);

    }

    var findNextRight = function () {
        var nextPos;
        var pList = pointList();
        for (var i = pList.length - 1; i >= 0; i--) {
            var posIndex;
            if (currentIndex == pList[i]) {
                posIndex = i == 0 ? pList.length - 1 : i - 1;
                nextPos = pList[posIndex];
                break;
            }
        }
        return nextPos;
    }

    var findNextLeft = function () {
        var nextPos;
        var pList = pointList();
        for (var i = 0; i < Images.length; i++) {
            var posIndex;
            if (currentIndex == pList[i]) {
                posIndex = i == pList.length - 1 ? 0 : i + 1;
                nextPos = pList[posIndex];
                break;
            }
        }

        return nextPos;
    }

    var Next = function (direction) {
        if (animating) return;
        var nextPos = direction == Directions.right ? findNextRight() : findNextLeft();
        AnimToFrame(nextPos, direction);
    }

    var animTimer;

    var AnimToFrame = function (target, dir, loop) {

        if (animating && !loop) return;

        if (target == currentIndex) {
            setView(target);
            if (me.onSnap) me.onSnap();
            animating = false;
            return;
        }

        animating = true;

        var nextFrame = currentIndex + dir;

        if (nextFrame < 0) {
            nextFrame = Images.length - 1;
        }
        else if (nextFrame == Images.length) {
            nextFrame = 0;
        }

        enterFrame(nextFrame, function () {
            if (currentIndex != target) {
                animTimer = setTimeout(function () {
                    AnimToFrame(target, dir, true, me.onSnap);
                }, 50);
            }
            else {
                setView(target);
                if (me.onSnap) me.onSnap();
                animating = false;
            }
        });

    }


    var _oldX;
    _dragging = false;

    var onTruckMouseDown = function (event) {
        var e = event.originalEvent;
        var posX = e.pageX || e.clientX;
        if (e.touches) posX = e.touches[0].pageX;
        _oldX = posX;
        _dragging = true;
        event.preventDefault();
    }

    var onTruckMouseMove = function (event) {

        if (!_dragging) return;

        var e = event.originalEvent;
        var posX = e.pageX || e.clientX;
        if (e.touches) posX = e.touches[0].pageX;

        var dist = (posX - _oldX) * -1;
        _oldX = posX;

        Drag(dist);

        event.preventDefault();
    }

    var onTruckMouseUp = function (e) {
        _dragging = false;
        Snap();
        e.preventDefault();
    }

    me.onSnap = null;

    me.Load = function (parent, truckDef, callback, reload) {

        if (parent.length < 0) return;

        currentParent = parent;
        CurrentTruck = truckDef;
        imageConsts = truckDef.ImageConsts;
        snapPoints = truckDef.SnapPoints;
        animating = false;
        dragDirection = null;
        _scaledSize = null;
        _pointList = null;

        if (!reload) {
            InitIndex = truckDef.InitIndex;
            currentIndex = InitIndex;
            Images = [];
        }

        var w = parent.innerWidth();
        var h = parent.innerHeight();

        if (!Container) {
            Container = $('<div/>').attr('id', 'truck-container').css({
                'position': 'absolute',
                'width': '100%',
                'height': '100%',
                'overflow': 'hidden'
            }).appendTo(parent);
        }

        if (!EventGrabber) {
            EventGrabber = $('<div/>').attr('id', 'truck-eventCover').css({
                'position': 'absolute',
                'width': '100%',
                'height': '100%',
                'overflow': 'hidden',
                'opacity': '0',
                'background-color': 'White'
            }).appendTo(parent);
        }

        Preload(Container, function () {
            AnimToFrame(currentIndex, Directions.left);
            if (callback) callback();
            EventGrabber.bind('mousedown touchstart', onTruckMouseDown);
            EventGrabber.bind('mousemove touchmove', onTruckMouseMove);
            EventGrabber.bind('mouseup touchend', onTruckMouseUp);
        });

    }

    me.wink = function (i_steps, i_callback) {

        animating = true;

        var dir = i_steps < 0 ? -1 : 1;

        var nextFrame = currentIndex + dir;

        i_steps += -dir;

        if (i_steps == 0) {
            animating = false;

            if (i_callback) i_callback();
            return;
        }
        if (nextFrame < 0) {
            nextFrame = Images.length - 1;
        }
        else if (nextFrame == Images.length) {
            nextFrame = 0;
        }
        enterFrame(nextFrame, function () {
            setTimeout(function () {
                me.wink(i_steps, i_callback);
            }, 30);
        });
    }

    me.ReLoad = function (callback) {
        me.Load(currentParent, CurrentTruck, callback, true);
    }

    me.Align = function (i_align) {
        $('.Truck-img').css('left', '0px');
    }

    return me;

} ());