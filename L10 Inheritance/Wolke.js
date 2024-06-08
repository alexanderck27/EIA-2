"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Wolke extends L10_Inheritance.Moveable {
        size;
        constructor(position, velocity, size) {
            super(position);
            this.velocity = velocity;
            this.size = size;
        }
        move(timeslice) {
            const offsetX = this.velocity.x * timeslice;
            const offsetY = this.velocity.y * timeslice;
            this.position.add(new L10_Inheritance.Vector(offsetX, offsetY));
            if (this.position.x > L10_Inheritance.crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
        }
        draw() {
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.fillStyle = 'white';
            this.drawCircle(this.position.x, this.position.y, this.size * 0.5); // Mittlerer Kreis
            this.drawCircle(this.position.x + this.size * 0.6, this.position.y + this.size * 0.2, this.size * 0.6); // Rechter Kreis
            this.drawCircle(this.position.x - this.size * 0.6, this.position.y + this.size * 0.2, this.size * 0.5); // Linker Kreis
            this.drawCircle(this.position.x + this.size * 0.3, this.position.y - this.size * 0.3, this.size * 0.5); // Oberer rechter Kreis
            this.drawCircle(this.position.x - this.size * 0.3, this.position.y - this.size * 0.3, this.size * 0.5); // Oberer linker Kreis
            L10_Inheritance.crc2.closePath();
            L10_Inheritance.crc2.fill();
        }
        drawCircle(x, y, radius) {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(x, y, radius, 0, Math.PI * 2);
            L10_Inheritance.crc2.restore();
            L10_Inheritance.crc2.fill(); // Füllen des Kreises
        }
    }
    L10_Inheritance.Wolke = Wolke;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Wolke.js.map