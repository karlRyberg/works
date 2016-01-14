
/////////////////////////////////////////////////////////////////////
//
//  TYPE:       Static class
//  NAME:       Strings
//  NAMESPACE:  LOUISE.Application
//  
//  SUMMARY
//      This class contains the interface texts in different languages.
//      Ecach language is contained in an object with the keys for the different texts
//
//  EVENTS
//      N/A
//
//  PUBLIC FIELDS  
//          EN (English)
//          HE (Hebrew)
//          LT (Lithuanian)
//          SV (Swedish)
//          FR (French)
//          NO (Norwegian)
//          LV (Latvian)
//          CS (Czech)
//          DA (Danish)
//          DE (German)
//          EL (Greek)
//          ES (Spanish)
//          ET (Estonian)
//          FI (Finnish)
//          HU (Hungarian)
//          IT (Italian)
//          NL (Dutch)
//          PL (Polish)
//          PT (Portuguese)
//          RO (Romanian)
//          SL (Slovenian)
//          TR (Trukish)
//          RU (Russian)
//          BG (Bulgarian)
//          HR (Croatian)
//
//  PUBLIC FUNCTIONS
//      N/A
//
//  DEPENDENCIES
//      N/A
//
//////////////////////////////////////////////////////////////////////

LOUISE.Application.Strings = (function () {

    return {

        EN: {
            NAVIGATE_FORWARD: "Navigate to the next slide",
            NAVIGATE_BACKWARD: "Navigate to the previous slide",
            SHOW_COURSE_MENU: "Display the course menu",
            HIDE_COURSE_MENU: "Hide the course menu",
            SHOW_TRAINER_NOTES: "Display trainer text area",
            HIDE_TRAINER_NOTES: "Hide trainer text area",
            BEGIN_PEN: "Acctivate drawing tool for lecture screen",
            END_PEN: "Disable pen tool",
            CLEAR_PEN: "Clear drawing tool",
            SLIDE: "Slide",
            PAGE: "Page",
            OF: "of",
            SEARCH_BOX_DEFAULT_MESSAGE: "Type here to search",
            SEARCH_DISBLED: "Search Disabled",
            EXIT_CONFIRM_MESSAGE: "Do you want to exit the presentation?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        HE: {
            NAVIGATE_FORWARD: "נווט לשקופית הבאה",
            NAVIGATE_BACKWARD: "נווט לשקופית הקודמת",
            SHOW_COURSE_MENU: "הצג את תפריט הקורס",
            HIDE_COURSE_MENU: "הסתר את תפריט הקורס",
            SHOW_TRAINER_NOTES: "הצג אזור טקסט למדריך",
            HIDE_TRAINER_NOTES: "הסתר אזור טקסט למדריך",
            BEGIN_PEN: "הפעל כלי ציור למסך הרצאה",
            END_PEN: "השבת כלי עט",
            CLEAR_PEN: "נקה כלי ציור",
            SLIDE: "שקופית",
            PAGE: "עמוד",
            OF: "מתוך",
            SEARCH_BOX_DEFAULT_MESSAGE: "הקלד כאן כדי לחפש",
            SEARCH_DISBLED: "חיפוש מושבת",
            EXIT_CONFIRM_MESSAGE: "האם ברצונך לצאת מהמצגת?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        LT: {
            NAVIGATE_FORWARD: "Pereiti prie kitos skaidrės",
            NAVIGATE_BACKWARD: "Pereiti prie ankstesnės skaidrės",
            SHOW_COURSE_MENU: "Rodyti kurso meniu",
            HIDE_COURSE_MENU: "Slėpti kurso meniu",
            SHOW_TRAINER_NOTES: "Rodyti instruktoriaus teksto sritį",
            HIDE_TRAINER_NOTES: "Slėpti instruktoriaus teksto sritį",
            BEGIN_PEN: "Aktyvinti piešimo įrankį paskaitos ekranui",
            END_PEN: "Išjungti rašiklio įrankį",
            CLEAR_PEN: "Išvalyti piešimo įrankį",
            SLIDE: "Skaidrė",
            PAGE: "Puslapis",
            OF: "iš",
            SEARCH_BOX_DEFAULT_MESSAGE: "Įveskite čia paieškai",
            SEARCH_DISBLED: "Paieška išjungta",
            EXIT_CONFIRM_MESSAGE: "Ar norite išeiti iš pristatymo?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        SV: {
            NAVIGATE_FORWARD: "Gå till nästa bild",
            NAVIGATE_BACKWARD: "Gå till föregående bild",
            SHOW_COURSE_MENU: "Visa kursmenyn",
            HIDE_COURSE_MENU: "Dölj kursmenyn",
            SHOW_TRAINER_NOTES: "Visa utbildningsledarens textfält",
            HIDE_TRAINER_NOTES: "Dölj utbildningsledarens textfält",
            BEGIN_PEN: "Aktivera ritverktyget för föreläsningsskärmen",
            END_PEN: "Inaktivera pennverktyget",
            CLEAR_PEN: "Rensa ritverktyget",
            SLIDE: "Bild",
            PAGE: "Sidan",
            OF: "av",
            SEARCH_BOX_DEFAULT_MESSAGE: "Skriv din sökning här",
            SEARCH_DISBLED: "Sökning inaktiverad",
            EXIT_CONFIRM_MESSAGE: "Vill du avsluta presentationen?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        FR: {
            NAVIGATE_FORWARD: "Passer à la diapositive suivante",
            NAVIGATE_BACKWARD: "Revenir à la diapositive précédente",
            SHOW_COURSE_MENU: "Afficher le menu du cours",
            HIDE_COURSE_MENU: "Masquer le menu du cours",
            SHOW_TRAINER_NOTES: "Afficher la zone de texte du formateur",
            HIDE_TRAINER_NOTES: "Masquer la zone de texte du formateur",
            BEGIN_PEN: "Activer l'outil de dessin pour l'écran de la conférence",
            END_PEN: "Désactiver le stylet",
            CLEAR_PEN: "Effacer l'outil de dessin",
            SLIDE: "Diapo",
            PAGE: "Page",
            OF: "sur",
            SEARCH_BOX_DEFAULT_MESSAGE: "Saisissez l'objet de votre recherche",
            SEARCH_DISBLED: "Recherche désactivée",
            EXIT_CONFIRM_MESSAGE: "Souhaitez-vous quitter la présentation ?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        NO: {
            NAVIGATE_FORWARD: "Gå til neste lysbilde",
            NAVIGATE_BACKWARD: "Gå til forrige lysbilde",
            SHOW_COURSE_MENU: "Vis kursmenyen",
            HIDE_COURSE_MENU: "Skjul kursmenyen",
            SHOW_TRAINER_NOTES: "Vis opplæringstekst",
            HIDE_TRAINER_NOTES: "Skjul opplæringstekst",
            BEGIN_PEN: "Aktiver tegneverktøy for forelesningsskjermen",
            END_PEN: "Deaktiver penneverktøy",
            CLEAR_PEN: "Fjern tegneverktøyet",
            SLIDE: "Lysbilde",
            PAGE: "Side",
            OF: "av",
            SEARCH_BOX_DEFAULT_MESSAGE: "Skriv her for å søke",
            SEARCH_DISBLED: "Søk deaktivert",
            EXIT_CONFIRM_MESSAGE: "Vil du avslutte presentasjonen?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        LV: {
            NAVIGATE_FORWARD: "Pāriet uz nākamo slaidu",
            NAVIGATE_BACKWARD: "Pāriet uz iepriekšējo slaidu",
            SHOW_COURSE_MENU: "Rādīt kursa izvēlni",
            HIDE_COURSE_MENU: "Slēpt kursa izvēlni",
            SHOW_TRAINER_NOTES: "Rādīt apmācības teksta lauku",
            HIDE_TRAINER_NOTES: "Slēpt apmācības teksta lauku",
            BEGIN_PEN: "Aktivēt rakstāmrīku apmācības ekrānam",
            END_PEN: "Atspējot rakstāmrīku",
            CLEAR_PEN: "Notīrīt uzrakstīto",
            SLIDE: "Slaids",
            PAGE: "Lapa",
            OF: "no",
            SEARCH_BOX_DEFAULT_MESSAGE: "Rakstiet šeit, lai meklētu",
            SEARCH_DISBLED: "Meklēšana atspējota",
            EXIT_CONFIRM_MESSAGE: "Vai vēlaties iziet no prezentācijas?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        CS: {
            NAVIGATE_FORWARD: "Přejít na následující snímek",
            NAVIGATE_BACKWARD: "Přejít na předchozí snímek",
            SHOW_COURSE_MENU: "Zobrazit nabídku kurzu",
            HIDE_COURSE_MENU: "Skrýt nabídku kurzu",
            SHOW_TRAINER_NOTES: "Zobrazit textovou oblast školitele",
            HIDE_TRAINER_NOTES: "Skrýt textovou oblast školitele",
            BEGIN_PEN: "Aktivovat kreslicí nástroj pro přednáškovou obrazovku",
            END_PEN: "Deaktivovat psací nástroj",
            CLEAR_PEN: "Deaktivovat kreslicí nástroj",
            SLIDE: "Snímek",
            PAGE: "Strana",
            OF: "z",
            SEARCH_BOX_DEFAULT_MESSAGE: "Sem zadejte hledaný výraz",
            SEARCH_DISBLED: "Hledání je deaktivováno",
            EXIT_CONFIRM_MESSAGE: "Přejete si prezentaci ukončit?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        DA: {
            NAVIGATE_FORWARD: "Gå til næste dias",
            NAVIGATE_BACKWARD: "Gå til forrige dias",
            SHOW_COURSE_MENU: "Vis kursusmenuen",
            HIDE_COURSE_MENU: "Skjul kursusmenuen",
            SHOW_TRAINER_NOTES: "Vis undervisertekst",
            HIDE_TRAINER_NOTES: "Skjul undervisertekst",
            BEGIN_PEN: "Aktivér tegneværktøj til underviserskærm",
            END_PEN: "Deaktiver skriveværktøj",
            CLEAR_PEN: "Nulstil tegneværktøj",
            SLIDE: "Dias",
            PAGE: "Side",
            OF: "af",
            SEARCH_BOX_DEFAULT_MESSAGE: "Skriv her for at søge",
            SEARCH_DISBLED: "Søgning deaktiveret",
            EXIT_CONFIRM_MESSAGE: "Vil du afslutte denne præsentation?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        DE: {
            NAVIGATE_FORWARD: "Zur nächsten Folie wechseln",
            NAVIGATE_BACKWARD: "Zur vorigen Folie wechseln",
            SHOW_COURSE_MENU: "Kursmenü anzeigen",
            HIDE_COURSE_MENU: "Kursmenü ausblenden",
            SHOW_TRAINER_NOTES: "Kursleiter-Textbereich anzeigen",
            HIDE_TRAINER_NOTES: "Kursleiter-Textbereich ausblenden",
            BEGIN_PEN: "Zeichenwerkzeug für Vortragsansicht aktivieren",
            END_PEN: "Stiftwerkzeug deaktivieren",
            CLEAR_PEN: "Zeichenwerkzeug löschen",
            SLIDE: "Folie",
            PAGE: "Seite",
            OF: "von",
            SEARCH_BOX_DEFAULT_MESSAGE: "Hier Suchtext eingeben",
            SEARCH_DISBLED: "Suche deaktiviert",
            EXIT_CONFIRM_MESSAGE: "Möchten Sie die Präsentation beenden?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        EL: {
            NAVIGATE_FORWARD: "Πλοήγηση στην επόμενη διαφάνεια",
            NAVIGATE_BACKWARD: "Πλοήγηση στην προηγούμενη διαφάνεια",
            SHOW_COURSE_MENU: "Εμφάνιση του μενού του μαθήματος",
            HIDE_COURSE_MENU: "Απόκρυψη του μενού του μαθήματος",
            SHOW_TRAINER_NOTES: "Εμφάνιση της περιοχής κειμένου για τον εκπαιδευτή",
            HIDE_TRAINER_NOTES: "Απόκρυψη της περιοχής κειμένου για τον εκπαιδευτή",
            BEGIN_PEN: "Ενεργοποίηση εργαλείου σχεδίασης για την οθόνη του εκπαιδευτή",
            END_PEN: "Απενεργοποίηση εργαλείου μολυβιού",
            CLEAR_PEN: "Απαλοιφή εργαλείου σχεδίασης",
            SLIDE: "Διαφάνεια",
            PAGE: "Σελίδα",
            OF: "από",
            SEARCH_BOX_DEFAULT_MESSAGE: "Πληκτρολογήστε εδώ για αναζήτηση",
            SEARCH_DISBLED: "Η αναζήτηση είναι απενεργοποιημένη",
            EXIT_CONFIRM_MESSAGE: "Θέλετε να φύγετε από την παρουσίαση",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        ES: {
            NAVIGATE_FORWARD: "Desplazarse a la siguiente diapositiva",
            NAVIGATE_BACKWARD: "Desplazarse a la diapositiva anterior",
            SHOW_COURSE_MENU: "Mostrar el menú del curso",
            HIDE_COURSE_MENU: "Ocultar el menú del curso",
            SHOW_TRAINER_NOTES: "Mostrar el área de texto del instructor",
            HIDE_TRAINER_NOTES: "Ocultar el área de texto del instructor",
            BEGIN_PEN: "Activar la herramienta de dibujo para la pantalla de clase",
            END_PEN: "Desactivar la herramienta de bolígrafo",
            CLEAR_PEN: "Borrar la herramienta de dibujo",
            SLIDE: "Diapositiva",
            PAGE: "Página",
            OF: "de",
            SEARCH_BOX_DEFAULT_MESSAGE: "Escribir aquí para realizar búsquedas",
            SEARCH_DISBLED: "Búsqueda desactivada",
            EXIT_CONFIRM_MESSAGE: "¿Desea salir de la presentación?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        ET: {
            NAVIGATE_FORWARD: "Mine järgmisele slaidile",
            NAVIGATE_BACKWARD: "Mine eelmisele slaidile",
            SHOW_COURSE_MENU: "Näita kursuse menüüd",
            HIDE_COURSE_MENU: "Peida kursuse menüü",
            SHOW_TRAINER_NOTES: "Näita koolitaja tekstipiirkonda",
            HIDE_TRAINER_NOTES: "Peida koolitaja tekstipiirkond",
            BEGIN_PEN: "Aktiveeri loenguekraani joonistusvahend",
            END_PEN: "Keela pliiats",
            CLEAR_PEN: "Kustuta joonistused",
            SLIDE: "Slaid",
            PAGE: "lk",
            OF: "/",
            SEARCH_BOX_DEFAULT_MESSAGE: "Kirjuta otsisõna siia",
            SEARCH_DISBLED: "Otsing on blokeeritud",
            EXIT_CONFIRM_MESSAGE: "Kas soovite esitlusest väljuda?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        FI: {
            NAVIGATE_FORWARD: "Siirry seuraavaan diaan",
            NAVIGATE_BACKWARD: "Siirry edelliseen diaan",
            SHOW_COURSE_MENU: "Näytä kurssivalikko",
            HIDE_COURSE_MENU: "Piilota kurssivalikko",
            SHOW_TRAINER_NOTES: "Näytä kouluttajan tekstialue",
            HIDE_TRAINER_NOTES: "Piilota kouluttajan tekstialue",
            BEGIN_PEN: "Aktivoi luentonäytön piirtotyökalu",
            END_PEN: "Poista kynätyökalu käytöstä",
            CLEAR_PEN: "Tyhjennä piirtotyökalu",
            SLIDE: "Dia",
            PAGE: "Sivu",
            OF: "/",
            SEARCH_BOX_DEFAULT_MESSAGE: "Tee haku kirjoittamalla tähän",
            SEARCH_DISBLED: "Haku poissa käytöstä",
            EXIT_CONFIRM_MESSAGE: "Haluatko lopettaa esityksen?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        HU: {
            NAVIGATE_FORWARD: "Előre a következő diára",
            NAVIGATE_BACKWARD: "Vissza az előző diára",
            SHOW_COURSE_MENU: "A kurzus menüjének megjelenítése",
            HIDE_COURSE_MENU: "A kurzus menüjének elrejtése",
            SHOW_TRAINER_NOTES: "Az oktatói szövegterület megjelenítése",
            HIDE_TRAINER_NOTES: "Az oktatói szövegterület elrejtése",
            BEGIN_PEN: "Rajzoló eszköz aktiválása az előadói képernyőn",
            END_PEN: "Toll eszköz kikapcsolása",
            CLEAR_PEN: "Rajzoló eszköz törlése",
            SLIDE: "Dia",
            PAGE: "Oldal",
            OF: "of",
            SEARCH_BOX_DEFAULT_MESSAGE: "Írjon ide a kereséshez",
            SEARCH_DISBLED: "Keresés kikapcsolva",
            EXIT_CONFIRM_MESSAGE: "Szeretne kilépni a prezentációból?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        IT: {
            NAVIGATE_FORWARD: "Passa alla prossima diapositiva",
            NAVIGATE_BACKWARD: "Passa alla diapositiva precedente",
            SHOW_COURSE_MENU: "Visualizza il menu del corso",
            HIDE_COURSE_MENU: "Nascondi il menu del corso",
            SHOW_TRAINER_NOTES: "Mostra l'area di testo dell'istruttore",
            HIDE_TRAINER_NOTES: "Nascondi l'area di testo dell'istruttore",
            BEGIN_PEN: "Attiva lo strumento di disegno per lo schermo da conferenza",
            END_PEN: "Disattiva lo strumento penna",
            CLEAR_PEN: "Cancella lo strumento di disegno",
            SLIDE: "Diapositiva",
            PAGE: "Pagina",
            OF: "di",
            SEARCH_BOX_DEFAULT_MESSAGE: "Scrivere qui per cercare",
            SEARCH_DISBLED: "Ricerca disattivata",
            EXIT_CONFIRM_MESSAGE: "Uscire dalla presentazione?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        NL: {
            NAVIGATE_FORWARD: "Navigeren naar volgende dia",
            NAVIGATE_BACKWARD: "Navigeren naar vorige dia",
            SHOW_COURSE_MENU: "Cursusmenu weergeven",
            HIDE_COURSE_MENU: "Cursusmenu verbergen",
            SHOW_TRAINER_NOTES: "Tekstgebied trainer weergeven",
            HIDE_TRAINER_NOTES: "Tekstgebied trainer verbergen",
            BEGIN_PEN: "Tekenfunctie voor cursusscherm activeren",
            END_PEN: "Penfunctie uitschakelen",
            CLEAR_PEN: "Tekenfunctie wissen",
            SLIDE: "Dia",
            PAGE: "Pagina",
            OF: "van",
            SEARCH_BOX_DEFAULT_MESSAGE: "Typ hier om te zoeken",
            SEARCH_DISBLED: "Zoeken uitgeschakeld",
            EXIT_CONFIRM_MESSAGE: "Wilt u de presentatie afsluiten?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        PL: {
            NAVIGATE_FORWARD: "Przejdź do następnego slajdu",
            NAVIGATE_BACKWARD: "Przejdź do poprzedniego slajdu",
            SHOW_COURSE_MENU: "Wyświetl menu szkolenia",
            HIDE_COURSE_MENU: "Ukryj menu szkolenia",
            SHOW_TRAINER_NOTES: "Wyświetl pole notatek instruktora",
            HIDE_TRAINER_NOTES: "Ukryj pole notatek instruktora",
            BEGIN_PEN: "Aktywuj narzędzie rysowania na ekranie wykładu",
            END_PEN: "Wyłącz narzędzie Pióro",
            CLEAR_PEN: "Wyczyść narzędzie rysowania",
            SLIDE: "Slajd",
            PAGE: "Strona",
            OF: "z",
            SEARCH_BOX_DEFAULT_MESSAGE: "Wpisz szukaną frazę",
            SEARCH_DISBLED: "Wyszukiwanie wyłączone",
            EXIT_CONFIRM_MESSAGE: "Czy chcesz zakończyć prezentację?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        PT: {
            NAVIGATE_FORWARD: "Navegar para o diapositivo seguinte",
            NAVIGATE_BACKWARD: "Navegar para o diapositivo anterior",
            SHOW_COURSE_MENU: "Apresentar o menu do curso",
            HIDE_COURSE_MENU: "Ocultar o menu do curso",
            SHOW_TRAINER_NOTES: "Apresentar a área de texto do formador",
            HIDE_TRAINER_NOTES: "Ocultar a área de texto do formador",
            BEGIN_PEN: "Activar ferramenta de desenho para o ecrã de palestra",
            END_PEN: "Desactivar caneta",
            CLEAR_PEN: "Apagar ferramenta de desenho",
            SLIDE: "Diapositivo",
            PAGE: "Página",
            OF: "de",
            SEARCH_BOX_DEFAULT_MESSAGE: "Escreva aqui para procurar",
            SEARCH_DISBLED: "Procura Desactivada",
            EXIT_CONFIRM_MESSAGE: "Pretende sair da apresentação?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        RO: {
            NAVIGATE_FORWARD: "Navigaţi la următorul diapozitiv",
            NAVIGATE_BACKWARD: "Navigaţi la diapozitivul anterior",
            SHOW_COURSE_MENU: "Afişează meniul traseului",
            HIDE_COURSE_MENU: "Ascunde meniul traseului",
            SHOW_TRAINER_NOTES: "Afişează zona cu text de instruire",
            HIDE_TRAINER_NOTES: "Ascunde zona cu text de instruire",
            BEGIN_PEN: "Activează instrumentul de desenat pentru ecranul de cursuri",
            END_PEN: "Dezactivează stiloul",
            CLEAR_PEN: "Eliberează instrumentul de desenat",
            SLIDE: "Diapozitiv",
            PAGE: "Pagina",
            OF: "din",
            SEARCH_BOX_DEFAULT_MESSAGE: "Tastaţi aici pentru a căuta",
            SEARCH_DISBLED: "Căutare dezactivată",
            EXIT_CONFIRM_MESSAGE: "Doriţi să părăsiţi această prezentare?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        SL: {
            NAVIGATE_FORWARD: "Preidi na novo stran prikaza",
            NAVIGATE_BACKWARD: "Preidi na prejšnjo stran prikaza",
            SHOW_COURSE_MENU: "Prikaži meni tečaja",
            HIDE_COURSE_MENU: "Skrij meni tečaja",
            SHOW_TRAINER_NOTES: "Prikaži območje besedila inštruktorja",
            HIDE_TRAINER_NOTES: "Skrij območje besedila inštruktorja",
            BEGIN_PEN: "Aktiviraj orodje za risanje na zaslonu predavanja",
            END_PEN: "Onemogoči pisalo",
            CLEAR_PEN: "Očisti risalno orodje",
            SLIDE: "Stran prikaza",
            PAGE: "Stran",
            OF: "od",
            SEARCH_BOX_DEFAULT_MESSAGE: "Vtipkaj iskalni niz tukaj",
            SEARCH_DISBLED: "Iskanje onemogočeno",
            EXIT_CONFIRM_MESSAGE: "Želite izhod iz predstavitve?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        TR: {
            NAVIGATE_FORWARD: "Sonraki slayta git",
            NAVIGATE_BACKWARD: "Önceki slayta git",
            SHOW_COURSE_MENU: "Kurs menüsünü göster",
            HIDE_COURSE_MENU: "Kurs menüsünü gizle",
            SHOW_TRAINER_NOTES: "Eğitmen metin alanını göster",
            HIDE_TRAINER_NOTES: "Eğitmen metin alanını gizle",
            BEGIN_PEN: "Ders ekranı için çizim aracını etkinleştir",
            END_PEN: "Kalem aracını devre dışı bırak",
            CLEAR_PEN: "Çizim aracını sil",
            SLIDE: "Slayt",
            PAGE: "Sayfa",
            OF: "/",
            SEARCH_BOX_DEFAULT_MESSAGE: "Arama yapmak için buraya yazın",
            SEARCH_DISBLED: "Arama Devre Dışı",
            EXIT_CONFIRM_MESSAGE: "Sunumdan çıkmak istiyor musunuz?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        RU: {
            NAVIGATE_FORWARD: "Перейти к следующему слайду",
            NAVIGATE_BACKWARD: "Перейти к предыдущему слайду",
            SHOW_COURSE_MENU: "Показать меню курса",
            HIDE_COURSE_MENU: "Скрыть меню курса",
            SHOW_TRAINER_NOTES: "Показать текстовую область инструктора",
            HIDE_TRAINER_NOTES: "Скрыть текстовую область инструктора",
            BEGIN_PEN: "Включить инструмент рисования для экрана лекции",
            END_PEN: "Отключить перо",
            CLEAR_PEN: "Очистить нарисованное",
            SLIDE: "Слайд",
            PAGE: "Стр.",
            OF: "из",
            SEARCH_BOX_DEFAULT_MESSAGE: "Введите данные для поиска",
            SEARCH_DISBLED: "Поиск отключен",
            EXIT_CONFIRM_MESSAGE: "Выйти из этой презентации?",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        BG: {
            NAVIGATE_FORWARD: "Navigate to the next slide (Придвижване към следващия слайд)",
            NAVIGATE_BACKWARD: "Navigate to the previous slide (Придвижване към предишния слайд)",
            SHOW_COURSE_MENU: "Display the course menu (Показване на менюто на курса(",
            HIDE_COURSE_MENU: "Hide the course menu (Скриване на менюто на курса)",
            SHOW_TRAINER_NOTES: "Display trainer text area (Показване на зоната с текста на лектора)",
            HIDE_TRAINER_NOTES: "Hide trainer text area (Скриване на зоната с текста на лектора)",
            BEGIN_PEN: "Acctivate drawing tool for lecture screen (Активиране на инструмента за рисуване за екрана за четене)",
            END_PEN: "Disable pen tool (Деактивиране на писалката)",
            CLEAR_PEN: "Clear drawing tool (Изчистване на инструмента за рисуване)",
            SLIDE: "Slide (Слайд)",
            PAGE: "Page (Стр.)",
            OF: "of (на)",
            SEARCH_BOX_DEFAULT_MESSAGE: "Type here to search (Въведете текст тук, за да извършите търсене)",
            SEARCH_DISBLED: "Search Disabled (Търсенето е деактивирано)",
            EXIT_CONFIRM_MESSAGE: "Do you want to exit the presentation? (Искате ли да излезете от презентацията?)",
            END_OF_SLIDE_SHOW: "End of presentation"
        },

        HR: {
            NAVIGATE_FORWARD: "Idi na sljedeći slajd",
            NAVIGATE_BACKWARD: "Idi na prethodni slajd",
            SHOW_COURSE_MENU: "Prikaži izbornik tečaja",
            HIDE_COURSE_MENU: "Sakrij izbornik tečaja",
            SHOW_TRAINER_NOTES: "Prikaži tekstno područje instruktora",
            HIDE_TRAINER_NOTES: "Sakrij tekstno područje instruktora",
            BEGIN_PEN: "Aktiviraj alat za crtanje za prikaz predavanja",
            END_PEN: "Deaktiviraj olovku",
            CLEAR_PEN: "Izbriši olovku",
            SLIDE: "Slajd",
            PAGE: "Stranica",
            OF: "od",
            SEARCH_BOX_DEFAULT_MESSAGE: "Upišite ovdje za pretraživanje",
            SEARCH_DISBLED: "Pretraživanje onemogućeno",
            EXIT_CONFIRM_MESSAGE: "Želite li izaći iz prezentacije?",
            END_OF_SLIDE_SHOW: "End of presentation"
        }
    };

})();