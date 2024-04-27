namespace Einkaufsliste{

document.addEventListener("DOMContentLoaded", () => {




    loadInitialEntries(5); // Lädt die Tabelle zu Beginn mit fünf Zeilen
        
    let button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", () => {
            console.log("Produkt hinzufügen");
            addNewRow();
        });
    }
});

function loadInitialEntries(numEntries: number) {
    fetch('Speicher.json')
        .then(response => response.json())
        .then((data: Eintrag[]) => {
            let tableBody = document.querySelector('#einkaufsliste tbody');
            if (tableBody) {
                for (let i = 0; i < numEntries; i++) {
                    let entry = data[i];
                    if (entry) {
                        let newRow = document.createElement('tr');
                        newRow.innerHTML = `
                            <td><input type="text" name="Produktname" value="${entry.Produktname || ''}" placeholder="Produktname" required /></td>
                            <td><input type="number" name="Anzahl" value="${entry.Anzahl || 0}" step="1" min="0" max="20" /></td>
                            <td><textarea name="Kommentar" rows="1" placeholder="Kommentar hier einfügen">${entry.Kommentar || ''}</textarea></td>
                            <td><input type="date" name="Datum" value="${entry.Datum || ''}" /></td>
                            <td><input type="checkbox" name="checkbox1" ${entry["zu Kaufen"] ? 'checked' : ''} /></td>
                            <td><input type="checkbox" name="checkbox2" ${entry.erledigt ? 'checked' : ''} /></td>
                            <td><input type="button" value="neues Produkt hinzufügen" /></td>
                        `;
                        tableBody.appendChild(newRow);
                    }
                }
            }
        });
}

function addNewRow() {
    let tableBody = document.querySelector('#einkaufsliste tbody');
    if (tableBody) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" name="Produktname" placeholder="Produktname" required /></td>
            <td><input type="number" name="Anzahl" step="1" min="0" max="20" value="0" /></td>
            <td><textarea name="Kommentar" rows="1" placeholder="Kommentar hier einfügen"></textarea></td>
            <td><input type="date" name="Datum" /></td>
            <td><input type="checkbox" name="checkbox1" /></td>
            <td><input type="checkbox" name="checkbox2" /></td>
            <td><input type="button" value="neues Produkt hinzufügen" /></td>
        `;
        tableBody.appendChild(newRow);
    }
}
}

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
        console.log("aktuelles Datum wurde hinzugefügt");
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
    button.addEventListener("click", () => {
        console.log("Produkt hinzufügen");
    });
}

interface Eintrag {
    "Produktname": string,
    "Anzahl": number,
    "Kommentar": string,
    "Datum": Date, 
    "zu Kaufen": boolean,
    "erledigt": boolean
}







