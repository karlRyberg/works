var Trucks = (function () {

    var me = {};

    me.tractor = {
        Name: 'tractor',
        ImageConsts: {
            Min: 0,
            Max: 62,
            Step: 2,
            Width: 900,
            Height: 675,
            BasePath: 'resources/images/trucks/tractor/4x2_Spinn-v05_'
        },
        SnapPoints: {
            left: 6,
            back: 15,
            right: 24,
            front: 0
        },
        InitIndex: 0
    };

    me.rigid = {
        Name: 'rigid',
        ImageConsts: {
            Min: 0,
            Max: 70,
            Step: 2,
            Width: 900,
            Height: 675,
            BasePath: 'resources/images/trucks/rigid/Spinn-v04_'
        },
        SnapPoints: {
            left: 6,
            back: 15,
            right: 24,
            front: 33
        },
        InitIndex: 33
    };

    me.DefaultTruck = me.tractor;

    return me;
} ());