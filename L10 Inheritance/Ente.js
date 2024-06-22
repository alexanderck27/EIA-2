"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Ente extends L10_Inheritance.Moveable {
        pondArea;
        state;
        mirror;
        underWater;
        Quaken;
        constructor(initialPosition, pondArea, _state, _mirror) {
            super(initialPosition);
            this.velocity = new L10_Inheritance.Vector((Math.random() - 0.6) * 2, (Math.random() - 0.4) * 2);
            this.pondArea = pondArea;
            this.state = _state;
            this.mirror = _mirror;
            this.underWater = -1;
            this.Quaken = new Audio('Sounds/enten.mp3');
            this.addClickListener();
        }
        addClickListener() {
            L10_Inheritance.crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        }
        handleClick(event) {
            let rect = L10_Inheritance.crc2.canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            if (this.isClicked(x, y)) {
                this.Quaken.play();
            }
        }
        isClicked(x, y) {
            let dx = x - this.position.x;
            let dy = y - this.position.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            return distance <= 30;
        }
        draw() {
            switch (this.state) {
                case "schwimmen":
                    this.drawSwimming();
                    break;
                case "tauchen":
                    this.drawTail();
                    break;
                default:
                    this.drawStanding();
            }
        }
        draweating() {
            L10_Inheritance.crc2.beginPath(); // Körper
            L10_Inheritance.crc2.ellipse(this.position.x, this.position.y, 40, 20, 0, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'yellow';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Kopf
            L10_Inheritance.crc2.arc(this.position.x + 35, this.position.y - 10, 20, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'yellow';
            L10_Inheritance.crc2.fill();
            // Schwarzes Auge
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(this.position.x + 43, this.position.y - 12, 3, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'black';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Schnabel oben
            L10_Inheritance.crc2.moveTo(this.position.x + 55, this.position.y - 5);
            L10_Inheritance.crc2.lineTo(this.position.x + 70, this.position.y - 5);
            L10_Inheritance.crc2.lineTo(this.position.x + 55, this.position.y - 15);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Schnabel unten
            L10_Inheritance.crc2.moveTo(this.position.x + 55, this.position.y - 7);
            L10_Inheritance.crc2.lineTo(this.position.x + 67, this.position.y + 7);
            L10_Inheritance.crc2.lineTo(this.position.x + 47, this.position.y + 7);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            this.move();
            this.updatePosition();
        }
        drawSwimming() {
            L10_Inheritance.crc2.beginPath(); // Körper
            L10_Inheritance.crc2.ellipse(this.position.x, this.position.y, 40, 20, 0, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'yellow';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Kopf
            L10_Inheritance.crc2.arc(this.position.x + 25, this.position.y - 20, 20, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'yellow';
            L10_Inheritance.crc2.fill();
            // Schwarzes Auge
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(this.position.x + 33, this.position.y - 20, 3, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'black';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Schnabel
            L10_Inheritance.crc2.moveTo(this.position.x + 45, this.position.y - 15);
            L10_Inheritance.crc2.lineTo(this.position.x + 60, this.position.y - 15);
            L10_Inheritance.crc2.lineTo(this.position.x + 45, this.position.y - 25);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            this.move();
            this.updatePosition();
        }
        drawTail() {
            L10_Inheritance.crc2.fillStyle = "yellow";
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fill();
            this.move();
            this.updatePosition();
        }
        drawStanding() {
            L10_Inheritance.crc2.beginPath(); // Körper
            L10_Inheritance.crc2.ellipse(this.position.x, this.position.y, 40, 20, 0, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'yellow';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Kopf
            L10_Inheritance.crc2.arc(this.position.x + 25, this.position.y - 20, 20, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'yellow';
            L10_Inheritance.crc2.fill();
            // Schwarzes Auge
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(this.position.x + 33, this.position.y - 22, 3, 0, 2 * Math.PI);
            L10_Inheritance.crc2.fillStyle = 'black';
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.beginPath(); // Schnabel
            L10_Inheritance.crc2.moveTo(this.position.x + 45, this.position.y - 15);
            L10_Inheritance.crc2.lineTo(this.position.x + 60, this.position.y - 15);
            L10_Inheritance.crc2.lineTo(this.position.x + 45, this.position.y - 25);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            // Linkes Bein
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(this.position.x - 10, this.position.y + 20);
            L10_Inheritance.crc2.lineTo(this.position.x - 10, this.position.y + 30);
            L10_Inheritance.crc2.lineTo(this.position.x - 5, this.position.y + 30);
            L10_Inheritance.crc2.lineTo(this.position.x - 5, this.position.y + 20);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            // Linker Fuß
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(this.position.x - 12, this.position.y + 25);
            L10_Inheritance.crc2.lineTo(this.position.x, this.position.y + 30);
            L10_Inheritance.crc2.lineTo(this.position.x - 22, this.position.y + 30);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            // Rechtes Bein
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(this.position.x + 10, this.position.y + 20);
            L10_Inheritance.crc2.lineTo(this.position.x + 10, this.position.y + 30);
            L10_Inheritance.crc2.lineTo(this.position.x + 15, this.position.y + 30);
            L10_Inheritance.crc2.lineTo(this.position.x + 15, this.position.y + 20);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            // Rechter Fuß
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.moveTo(this.position.x + 12, this.position.y + 25);
            L10_Inheritance.crc2.lineTo(this.position.x, this.position.y + 30);
            L10_Inheritance.crc2.lineTo(this.position.x + 22, this.position.y + 30);
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fillStyle = 'orange';
            L10_Inheritance.crc2.fill();
            this.move();
            this.updatePosition();
        }
        move() {
            let offsetX = 1;
            let movementAreaWidth = 800; // Breite des Bewegungsbereichs
            let movementAreaHeight = 150; // Höhe des Bewegungsbereichs
            if (this.state === "schwimmen") {
                if (Math.random() <= 0.011) {
                    this.state = "tauchen";
                }
            }
            else if (this.state === "tauchen") {
                this.underWater++;
                if (this.underWater >= 80 && Math.random() >= 0.011) {
                    this.state = "schwimmen";
                    this.underWater = -1;
                }
            }
            // linker Rand
            if (this.position.x <= this.pondArea.x) {
                this.mirror = false;
            }
            // rechter Rand
            else if (this.position.x >= this.pondArea.x + movementAreaWidth - 100) {
                this.mirror = true;
            }
            if (this.mirror) {
                this.position.x -= offsetX;
            }
            else {
                this.position.x += offsetX;
            }
            if (this.position.y <= this.pondArea.y) {
                this.position.y = this.pondArea.y;
            }
            else if (this.position.y >= this.pondArea.y + movementAreaHeight) {
                this.position.y = this.pondArea.y + movementAreaHeight;
            }
        }
        updatePosition() {
        }
    }
    L10_Inheritance.Ente = Ente;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Ente.js.map