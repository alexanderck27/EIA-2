"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad); // Event-Listener für Laden des Fensters - aufruf handleLoad
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox); //Event-Listener für Mausbewegungen - Funktion setinfobox
        document.addEventListener("click", logInfo); // Event-Listener für Mausklicks - Funktion loginfo
        document.addEventListener("keyup", logInfo); // Event-Listener für Taste - Funktion logInfo
        document.body.addEventListener("click", logInfo); //Evet-Listener für Mausklicks - Funktion loginfo aufrufen
        document.body.addEventListener("keyup", logInfo); //Event-Listener für Taste - Funktion logInfo aufrufen
        document.body.addEventListener("click", logInfo); //Event-Listener für Mausklicks - Funktion loginfo aufrufen
        document.body.addEventListener("keyup", logInfo); //Event-Listener für Taste - Funktion loginfo aufrufen
        //Event-Listener für HTML-Elemente div0 und div1 und Funktion logInfo
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        div0.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        // vent-Listener für HTML-Element Button und Funktion customEvent aufruft
        let button = document.querySelector("button");
        button.addEventListener("click", customEvent);
    }
    function customEvent() {
        let customEvent = new CustomEvent("hallo"); //Event  "hallo"
        let button = document.querySelector("button"); //HTML-Button-Element führt zu benutzerdefiniertem Event
        button.dispatchEvent(customEvent);
        document.addEventListener("hallo", helloFunction); // Event-Listener für "hallo" macht Funktion helloFunction
    }
    function helloFunction(_event) {
        console.log(_event); //Ausgabe
    }
    //Funktion setInfoBox bei Mausbewegung 
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let span = document.querySelector("span"); //Erstes Span-Element auf der Seite auswählen
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";
        span.innerHTML = "mousposition: " + x + " " + y + " " + "target: " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event); //Konsole
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map