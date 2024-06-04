"use strict";
var L09_Ententeich;
(function (L09_Ententeich) {
    let imgData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Ententeich.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon = 365;
        drawBackground();
        drawSky();
        drawGrass();
        drawHorizon(horizon);
        drawMountain(100, L09_Ententeich.crc2.canvas.height / 2, 300, 200, 500, L09_Ententeich.crc2.canvas.height / 2, '#999999');
        drawMountain(400, L09_Ententeich.crc2.canvas.height / 2, 600, 100, 800, L09_Ententeich.crc2.canvas.height / 2, '#888888');
        drawPond(600, L09_Ententeich.crc2.canvas.height * 0.75, 200, 100);
        drawDuck(650, L09_Ententeich.crc2.canvas.height * 0.78 - 50);
        drawDuck(550, L09_Ententeich.crc2.canvas.height * 0.75 - 50);
        drawDuck(570, L09_Ententeich.crc2.canvas.height * 0.85 - 50);
        drawCloud(200, 100);
        drawCloud(500, 130);
        drawCloud(1500, 150);
        drawCloud(1200, 110);
        drawTree({ x: 50, y: 560 });
        drawTree({ x: 900, y: 450 });
        drawTree({ x: 1200, y: 480 });
        drawSun({ x: 860, y: 75 });
        imgData = L09_Ententeich.crc2.getImageData(0, 0, canvas.width, canvas.height);
        const clouds = [];
        clouds.push(new Cloud(new Vector(-200, 8), new Vector(50, 0), 100));
        clouds.push(new Cloud(new Vector(-600, 5), new Vector(20, 0), 100));
        clouds.push(new Cloud(new Vector(-950, 10), new Vector(80, 0), 100));
        clouds.push(new Cloud(new Vector(-900, 12), new Vector(40, 0), 100));
        animate(clouds);
    }
    function animate(clouds) {
        L09_Ententeich.crc2.putImageData(imgData, 0, 0); // Canvas zurücksetzen
        clouds.forEach(cloud => cloud.move(1 / 80));
        clouds.forEach(cloud => cloud.draw());
        requestAnimationFrame(() => animate(clouds)); // Animation fortsetzen
    }
    function drawBackground() {
        let gradient = L09_Ententeich.crc2.createLinearGradient(0, 0, 0, L09_Ententeich.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "green");
        L09_Ententeich.crc2.fillStyle = gradient;
        L09_Ententeich.crc2.fillRect(0, 0, L09_Ententeich.crc2.canvas.width, L09_Ententeich.crc2.canvas.height);
    }
    function drawGrass() {
        L09_Ententeich.crc2.fillStyle = 'green';
        L09_Ententeich.crc2.fillRect(0, L09_Ententeich.crc2.canvas.height / 2, L09_Ententeich.crc2.canvas.width, L09_Ententeich.crc2.canvas.height / 2);
    }
    function drawHorizon(horizon) {
        L09_Ententeich.crc2.beginPath();
        L09_Ententeich.crc2.moveTo(0, horizon);
        L09_Ententeich.crc2.lineTo(L09_Ententeich.crc2.canvas.width, horizon);
        L09_Ententeich.crc2.strokeStyle = 'black';
        L09_Ententeich.crc2.stroke();
    }
    function drawMountain(x1, y1, x2, y2, x3, y3, color) {
        L09_Ententeich.crc2.beginPath();
        L09_Ententeich.crc2.moveTo(x1, y1);
        L09_Ententeich.crc2.lineTo(x2, y2);
        L09_Ententeich.crc2.lineTo(x3, y3);
        L09_Ententeich.crc2.closePath();
        L09_Ententeich.crc2.fillStyle = color;
        L09_Ententeich.crc2.fill();
    }
    function drawSky() {
        L09_Ententeich.crc2.fillStyle = 'lightblue';
        L09_Ententeich.crc2.fillRect(0, 0, L09_Ententeich.crc2.canvas.width, L09_Ententeich.crc2.canvas.height / 2);
    }
    function drawPond(centerX, centerY, width, height) {
        L09_Ententeich.crc2.beginPath();
        L09_Ententeich.crc2.ellipse(centerX, centerY, width / 1, height / 2, 0, 0, 2 * Math.PI);
        L09_Ententeich.crc2.fillStyle = 'blue';
        L09_Ententeich.crc2.fill();
        L09_Ententeich.crc2.strokeStyle = '#8B4513';
        L09_Ententeich.crc2.lineWidth = 5;
        L09_Ententeich.crc2.stroke();
    }
    function drawDuck(centerX, centerY) {
        L09_Ententeich.crc2.beginPath(); //Körper
        L09_Ententeich.crc2.ellipse(centerX, centerY, 40, 20, 0, 0, 2 * Math.PI);
        L09_Ententeich.crc2.fillStyle = 'yellow';
        L09_Ententeich.crc2.fill();
        L09_Ententeich.crc2.beginPath(); //Kopf
        L09_Ententeich.crc2.arc(centerX + 25, centerY - 20, 20, 0, 2 * Math.PI);
        L09_Ententeich.crc2.fillStyle = 'yellow';
        L09_Ententeich.crc2.fill();
        L09_Ententeich.crc2.font = 'bold 15px Arial';
        L09_Ententeich.crc2.fillStyle = 'black';
        L09_Ententeich.crc2.fillText('x', centerX + 33, centerY - 22);
        L09_Ententeich.crc2.beginPath(); //Schnabel
        L09_Ententeich.crc2.moveTo(centerX + 45, centerY - 15);
        L09_Ententeich.crc2.lineTo(centerX + 60, centerY - 15);
        L09_Ententeich.crc2.lineTo(centerX + 45, centerY - 25);
        L09_Ententeich.crc2.closePath();
        L09_Ententeich.crc2.fillStyle = 'orange';
        L09_Ententeich.crc2.fill();
    }
    function drawCloud(centerX, centerY) {
        L09_Ententeich.crc2.fillStyle = 'white';
        L09_Ententeich.crc2.beginPath();
        L09_Ententeich.crc2.arc(centerX, centerY, 20, 0, 2 * Math.PI); // Mittlerer Kreis
        L09_Ententeich.crc2.arc(centerX + 30, centerY + 10, 25, 0, 2 * Math.PI); // Rechter Kreis
        L09_Ententeich.crc2.arc(centerX - 30, centerY + 10, 20, 0, 2 * Math.PI); // Linker Kreis
        L09_Ententeich.crc2.arc(centerX + 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer rechter Kreis
        L09_Ententeich.crc2.arc(centerX - 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer linker Kreis
        L09_Ententeich.crc2.fill();
    }
    function drawTree(position) {
        // Trunk
        L09_Ententeich.crc2.fillStyle = "brown";
        L09_Ententeich.crc2.fillRect(position.x + 90, position.y + 10, 60, -100);
        // Crown
        L09_Ententeich.crc2.save();
        L09_Ententeich.crc2.fillStyle = "limegreen";
        L09_Ententeich.crc2.beginPath();
        L09_Ententeich.crc2.arc(position.x + 120, position.y - 200, 120, 0, 2 * Math.PI);
        L09_Ententeich.crc2.fill();
        L09_Ententeich.crc2.restore();
    }
    function drawSun(_position) {
        let centerX = _position.x;
        let centerY = _position.y;
        let radius = 50;
        let rays = 12; // Anzahl der Sonnenstrahlen
        L09_Ententeich.crc2.save();
        L09_Ententeich.crc2.translate(centerX, centerY);
        L09_Ententeich.crc2.fillStyle = "yellow"; // Farbe der Sonne
        // Zeichne den Kreis als Sonnenzentrum
        L09_Ententeich.crc2.beginPath();
        L09_Ententeich.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        L09_Ententeich.crc2.fill();
        // Zeichne die Sonnenstrahlen
        L09_Ententeich.crc2.strokeStyle = "yellow"; // Farbe der Strahlen
        L09_Ententeich.crc2.lineWidth = 2; // Breite der Strahlen
        for (let i = 0; i < rays; i++) {
            let angle = (i * 360 / rays) * Math.PI / 180;
            let rayLength = radius * 1.8; // Länge der Strahlen
            let startX = Math.cos(angle) * radius;
            let startY = Math.sin(angle) * radius;
            let endX = Math.cos(angle) * rayLength;
            let endY = Math.sin(angle) * rayLength;
            // Zeichne den Sonnenstrahl
            L09_Ententeich.crc2.beginPath();
            L09_Ententeich.crc2.moveTo(startX, startY);
            L09_Ententeich.crc2.lineTo(endX, endY);
            L09_Ententeich.crc2.stroke();
        }
    }
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    class Cloud {
        position;
        velocity;
        size;
        constructor(position, velocity, size) {
            this.position = position;
            this.velocity = velocity;
            this.size = size;
        }
        move(_timeslice) {
            let offset = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > L09_Ententeich.crc2.canvas.width) {
                this.position.x = 0;
            }
        }
        draw() {
            drawCloud(this.position.x, this.position.y);
        }
    }
})(L09_Ententeich || (L09_Ententeich = {}));
//# sourceMappingURL=Ententeich_Main.js.map