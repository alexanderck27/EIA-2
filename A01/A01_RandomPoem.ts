namespace Zufallsgedicht{

// Arrays für Subjekte, Prädikate und Objekte
const subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];                                   // 1. Array
const predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];                               // 2. Array
const objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];   // 3. Array

// rückwerts zählende for-Schleife
for (let i = subjects.length; i >= 1; i--) {  //Laufvariable i, Die Schleife wird solange ausgeführt, wie i größer oder gleich 1 ist
    const subject = subjects[i - 1]; //das aktuelle Subjekt aus dem Array subjects abgerufen und in der Konstanten subject gespeichert
    const predicate = predicates[i - 1]; //das aktuelle Prädikat aus dem Array predicates abgerufen und in der Konstanten predicate gespeichert
    const object = objects[i - 1]; //das aktuelle Objekt aus dem Array objects abgerufen und in der Konstanten objects gespeichert
    
  // Funktion getVerse wird aufgerufen und den zurückgelieferten Wert einer Variable zuweisen
    const verse: string = getVerse_(subjects, predicates, objects); //übergibt der Funktion die Arrays als Argumente
    console.log(verse);                                             // gibt Wert in Konsole aus
}

// Funktion getVerse wird definiert
function getVerse_( _subjects: string[], _predicates: string[], _objects: string[]): string {
    let verse: string = ""; // Eine Variable vom Typ string, die einen Vers aufnehmen soll und initialisiert ist

    // Zufallszahl für Subjekte durch mathrandom
    const randomSubjectIndex: number = Math.floor(Math.random() * _subjects.length);
    const randomSubject: string = _subjects.splice(randomSubjectIndex, 1)[0];
    verse += randomSubject + " "; // ausgewähltes Subjekt zum Vers

    // Zufallszahl für Prädikate durch mathrandom
    const randomPredicateIndex: number = Math.floor(Math.random() * _predicates.length);
    const randomPredicate: string = _predicates.splice(randomPredicateIndex, 1)[0];
    verse += randomPredicate + " "; // ausgewähltes Prädikat zum Vers

    // Zufallszahl für Objekte durch mathrandom
    const randomObjectIndex: number = Math.floor(Math.random() * _objects.length);
    const randomObject: string = _objects.splice(randomObjectIndex, 1)[0];
    verse += randomObject; // ausgewähltes Objekt zum Vers

    return verse; // Die Vers-Variable von der Funktion zurückgeben
}
}