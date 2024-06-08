"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Static {
        position;
        constructor(_position) {
            this.position = _position;
        }
        static drawBackground() {
            let gradient = L10_Inheritance.crc2.createLinearGradient(0, 0, 0, L10_Inheritance.crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.5, "green");
            L10_Inheritance.crc2.fillStyle = gradient;
            L10_Inheritance.crc2.fillRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
        }
        static drawSky() {
            L10_Inheritance.crc2.fillStyle = 'lightblue';
            L10_Inheritance.crc2.fillRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height / 2);
        }
        static drawGrass() {
            L10_Inheritance.crc2.fillStyle = 'green';
            L10_Inheritance.crc2.fillRect(0, L10_Inheritance.crc2.canvas.height / 2, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height / 2);
        }
        static drawHorizon(horizon) {
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(0, horizon);
            L10_Inheritance.crc2.lineTo(L10_Inheritance.crc2.canvas.width, horizon);
            L10_Inheritance.crc2.strokeStyle = 'black';
            L10_Inheritance.crc2.stroke();
        }
        static drawMountain(x1, y1, x2, y2, x3, y3, color) {
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(x1, y1);
            L10_Inheritance.crc2.lineTo(x2, y2);
            L10_Inheritance.crc2.lineTo(x3, y3);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = color;
            L10_Inheritance.crc2.fill();
        }
        static drawPond(centerX, centerY, width, height) {
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.ellipse(centerX, centerY, width / 2 + 10, height / 2 + 10, 0, 0, Math.PI * 2);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = "#8B4513";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = "#48CAE4";
            L10_Inheritance.crc2.fill();
        }
        static drawTree(position) {
            L10_Inheritance.crc2.fillStyle = "brown";
            L10_Inheritance.crc2.fillRect(position.x + 90, position.y + 10, 60, -100);
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.fillStyle = "limegreen";
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(position.x + 120, position.y - 200, 120, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
        static drawSun(position) {
            let centerX = position.x;
            let centerY = position.y;
            let radius = 50;
            let rays = 12; // Anzahl der Sonnenstrahlen
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.translate(centerX, centerY);
            L10_Inheritance.crc2.fillStyle = "yellow"; // Farbe der Sonne
            // Zeichne den Kreis als Sonnenzentrum
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fill();
            // Zeichne die Sonnenstrahlen
            L10_Inheritance.crc2.strokeStyle = "yellow"; // Farbe der Strahlen
            L10_Inheritance.crc2.lineWidth = 2; // Breite der Strahlen
            for (let i = 0; i < rays; i++) {
                let angle = (i * 360 / rays) * Math.PI / 180;
                let rayLength = radius * 1.8; // Länge der Strahlen
                let startX = Math.cos(angle) * radius;
                let startY = Math.sin(angle) * radius;
                let endX = Math.cos(angle) * rayLength;
                let endY = Math.sin(angle) * rayLength;
                // Zeichne den Sonnenstrahl
                L10_Inheritance.crc2.beginPath();
                L10_Inheritance.crc2.moveTo(startX, startY);
                L10_Inheritance.crc2.lineTo(endX, endY);
                L10_Inheritance.crc2.stroke();
            }
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.Static = Static;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=statisch.js.map