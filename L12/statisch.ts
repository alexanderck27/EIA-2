namespace L10_Inheritance {

    export class Static {
        protected position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        static drawBackground(): void { //zeichnet Hintergrund
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "green");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        static drawSky(): void { //zeichnet Himmel
            crc2.fillStyle = 'lightblue';
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height / 2);
        }

        static drawGrass(): void { //zeichnet Wiese
            crc2.fillStyle = 'green';
            crc2.fillRect(0, crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height / 2);
        }

        static drawHorizon(horizon: number): void { //zeichnet Horizontlinie
            crc2.beginPath();
            crc2.moveTo(0, horizon);
            crc2.lineTo(crc2.canvas.width, horizon);
            crc2.strokeStyle = 'black';
            crc2.stroke();
        }

        static drawMountain(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string): void { //zeichnet Berg
            crc2.beginPath();
            crc2.moveTo(x1, y1);
            crc2.lineTo(x2, y2);
            crc2.lineTo(x3, y3);
            crc2.closePath();
            crc2.fillStyle = color;
            crc2.fill();

            
        }

        static drawPond(centerX: number, centerY: number, width: number, height: number): void { //zeichnet Teich
            crc2.beginPath();
            crc2.ellipse(centerX, centerY, width / 2 + 10, height / 2 + 10, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#8B4513";
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fillStyle = "#48CAE4";
            crc2.fill();
        }

        static drawTree(position: { x: number, y: number }): void { //zeichnet Baum
            crc2.fillStyle = "brown";
            crc2.fillRect(position.x + 90, position.y + 10, 60, -100);

            crc2.save();
            crc2.fillStyle = "limegreen";
            crc2.beginPath();
            crc2.arc(position.x + 120, position.y - 200, 120, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        static drawSun(position: { x: number, y: number }): void { //zeichnet Sonne
            let centerX: number = position.x;
            let centerY: number = position.y;
            let radius: number = 50;
            let rays: number = 12; // Anzahl der Sonnenstrahlen

            crc2.save();
            crc2.translate(centerX, centerY);
            crc2.fillStyle = "yellow"; // Farbe der Sonne

            // Zeichne den Kreis als Sonnenzentrum
            crc2.beginPath();
            crc2.arc(0, 0, radius, 0, 2 * Math.PI);
            crc2.fill();

            // Zeichne die Sonnenstrahlen
            crc2.strokeStyle = "yellow"; // Farbe der Strahlen
            crc2.lineWidth = 2; // Breite der Strahlen

            for (let i = 0; i < rays; i++) {
                let angle: number = (i * 360 / rays) * Math.PI / 180;
                let rayLength: number = radius * 1.8; // Länge der Strahlen

                let startX: number = Math.cos(angle) * radius;
                let startY: number = Math.sin(angle) * radius;
                let endX: number = Math.cos(angle) * rayLength;
                let endY: number = Math.sin(angle) * rayLength;

                // Zeichne den Sonnenstrahl
                crc2.beginPath();
                crc2.moveTo(startX, startY);
                crc2.lineTo(endX, endY);
                crc2.stroke();
            }
            crc2.restore();
        }
    }
}
