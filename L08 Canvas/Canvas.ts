namespace Canvas {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawBackground();
        drawTriangles({ x: canvas.width, y: canvas.height });
        drawCircles({ x: canvas.width, y: canvas.height }); // Aufruf der Funktion zum Zeichnen von Kreisen
    }

    // Funktion zum Zeichnen des Hintergrunds mit zufälligen Farben
    function drawBackground(): void {
        console.log("Background");

    }

    // Funktion zum Zeichnen von Dreiecken mit zufälligen Positionen und Farben
    function drawTriangles(_position: Vector): void {
        console.log("Triangles", _position);

        let nTriangles: number = 10000; // 10.000 Dreiecke

        crc2.save(); // Speichern des aktuellen Zeichenzustands

        for (let drawn: number = 0; drawn < nTriangles; drawn++) {
            crc2.save(); // Speichern des aktuellen Zeichenzustands für jedes einzelne Dreieck
            let x: number = Math.random() * _position.x; // Zufällige x-Position des Dreiecks
            let y: number = Math.random() * _position.y; // Zufällige y-Position des Dreiecks

            // Erstellung eines linearen Farbverlaufs für jedes Dreieck
            let gradient: CanvasGradient = crc2.createLinearGradient(x, y, x + 20, y + 20);
            let z: number = Math.floor(Math.random() * 4);

            // Zufällige Auswahl einer Farbpalette für jedes Dreieck
            switch (z) {
                case 0:
                    gradient.addColorStop(0, "pink");
                    gradient.addColorStop(1, "red");
                    break;
                case 1:
                    gradient.addColorStop(0, "limegreen");
                    gradient.addColorStop(1, "green");
                    break;
                case 2:
                    gradient.addColorStop(0, "blue");
                    gradient.addColorStop(1, "darkblue");
                    break;
                default:
                    gradient.addColorStop(0, "black");
                    gradient.addColorStop(1, "yellow");
            }

            // Festlegen der Farbfüllung für das aktuelle Dreieck
            crc2.fillStyle = gradient;

            // Beginnen des Pfads für das aktuelle Dreieck
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x + 20, y + 40);
            crc2.lineTo(x - 20, y + 60);
            crc2.closePath();

            // Füllen des Dreiecks mit der festgelegten Farbe
            crc2.fill();

            crc2.restore(); // Wiederherstellen des vorherigen Zeichenzustands nach dem Zeichnen des Dreiecks
        }

        crc2.restore(); // Wiederherstellen des ursprünglichen Zeichenzustands
    }

    // Funktion zum Zeichnen von Kreisen mit zufälligen Positionen und Farben
    function drawCircles(_position: Vector): void {
        console.log("Circles", _position);

        let nCircles: number = 80; // Anzahl der zu zeichnenden Kreise

        crc2.save(); // Speichern des aktuellen Zeichenzustands

        for (let drawn: number = 0; drawn < nCircles; drawn++) {
            crc2.save(); // Speichern des aktuellen Zeichenzustands für jeden einzelnen Kreis
            let x: number = Math.random() * _position.x; // Zufällige x-Position des Kreises
            let y: number = Math.random() * _position.y; // Zufällige y-Position des Kreises
            let radius: number = Math.random() * 50; // Zufälliger Radius für den Kreis

            // Erstellung eines radialen Farbverlaufs für jeden Kreis
            let gradient: CanvasGradient = crc2.createRadialGradient(x, y, 0, x, y, radius);
            let z: number = Math.floor(Math.random() * 4);

            // Zufällige Auswahl einer Farbpalette für jeden Kreis
            switch (z) {
                case 0:
                    gradient.addColorStop(0, "blue");
                    gradient.addColorStop(1, "red");
                    break;
                case 1:
                    gradient.addColorStop(0, "pink");
                    gradient.addColorStop(1, "green");
                    break;
                case 2:
                    gradient.addColorStop(0, "blue");
                    gradient.addColorStop(1, "darkblue");
                    break;
                default:
                    gradient.addColorStop(0, "purple");
                    gradient.addColorStop(1, "green");
            }

            // Festlegen der Farbfüllung für den aktuellen Kreis
            crc2.fillStyle = gradient;

            // Zeichnen des Kreises
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.closePath();

            // Füllen des Kreises mit der festgelegten Farbe
            crc2.fill();

            crc2.restore(); // Wiederherstellen des vorherigen Zeichenzustands nach dem Zeichnen des Kreises
        }

        crc2.restore(); // Wiederherstellen des ursprünglichen Zeichenzustands
    }
}
