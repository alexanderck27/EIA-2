namespace L09_Ententeich {

    let crc2: CanvasRenderingContext2D;
    let line: number = 0.46; // Die relative Position des Horizonts

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Verwende line direkt, um die relative Position des Horizonts zu berechnen
        let horizon: number = crc2.canvas.height * line;

        drawSky();
        drawGrass();
        drawHorizon(horizon); // Übergib die relative Position des Horizonts
        drawMountain(100, crc2.canvas.height / 2, 300, 200, 500, crc2.canvas.height / 2, '#999999');
        drawMountain(400, crc2.canvas.height / 2, 600, 100, 800, crc2.canvas.height / 2, '#888888');
    }

    window.addEventListener("load", handleLoad);

    // Funktion zum Zeichnen des grünen Streifens (Gras)
    function drawGrass() {
        crc2.fillStyle = 'green';
        crc2.fillRect(0, crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height / 2);
    }

    // Funktion zum Zeichnen des Horizonts
    function drawHorizon(horizon: number) {
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(crc2.canvas.width, horizon);
        crc2.strokeStyle = 'black'; // Schwarze Linie für den Horizont
        crc2.stroke();
    }

    // Funktion zum Zeichnen einer Bergkette
    function drawMountain(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string) {
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x3, y3);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
    }

    // Funktion zum Zeichnen des Himmels
    function drawSky() {
        crc2.fillStyle = 'lightblue';
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height / 2);
    }
}
