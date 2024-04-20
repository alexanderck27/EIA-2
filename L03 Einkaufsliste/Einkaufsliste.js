"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    document.addEventListener("DOMContentLoaded", () => {
        let Produktname = document.getElementById("Produktname");
        if (Produktname) {
            Produktname.addEventListener("input", () => {
                console.log("Produktname wurde hinzugefügt");
            });
        }
        let Anzahl = document.getElementById("Anzahl");
        if (Anzahl) {
            Anzahl.addEventListener("input", () => {
                console.log("Produktanzahl wurde hinzugefügt");
            });
        }
        let Kommentar = document.getElementById("Kommentar");
        if (Kommentar) {
            Kommentar.addEventListener("input", () => {
                console.log("Kommentar wurde hinzugefügt");
            });
        }
        let Datum = document.getElementById("Datum");
        if (Datum) {
            Datum.addEventListener("input", () => {
                console.log("Datum wurde hinzugefügt");
            });
        }
        let checkbox1 = document.getElementById("checkbox1");
        if (checkbox1) {
            checkbox1.addEventListener("input", () => {
                console.log("Produkt muss eingekauft werden");
            });
        }
        let checkbox2 = document.getElementById("checkbox2");
        if (checkbox2) {
            checkbox2.addEventListener("input", () => {
                console.log("Produkt wurde gekauft");
            });
        }
        let button = document.getElementById("button");
        if (button) {
            button.addEventListener("input", () => {
                console.log("Produkt hinzufügen");
            });
        }
    });
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste.js.map