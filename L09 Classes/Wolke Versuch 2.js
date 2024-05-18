"use strict";
var L09_Ententeich;
(function (L09_Ententeich) {
    class Wolke {
        positionX;
        positionY;
        color;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
        }
        move() {
            this.positionX += 0.5; // Bewegung nach rechts
            const screenWidth = window.innerWidth;
            // Zurücksetzen, wenn die Wolke den rechten Bildschirmrand erreicht
            if (this.positionX > screenWidth) {
                this.positionX = -100; // Startet die Wolke links vom Bildschirmrand
            }
        }
        draw() {
            L09_Ententeich.crc2.fillStyle = this.color;
            L09_Ententeich.crc2.beginPath();
            L09_Ententeich.crc2.arc(this.positionX, this.positionY, 20, 0, 2 * Math.PI); // Mittlerer Kreis
            L09_Ententeich.crc2.arc(this.positionX + 30, this.positionY + 10, 25, 0, 2 * Math.PI); // Rechter Kreis
            L09_Ententeich.crc2.arc(this.positionX - 30, this.positionY + 10, 20, 0, 2 * Math.PI); // Linker Kreis
            L09_Ententeich.crc2.arc(this.positionX + 15, this.positionY - 10, 20, 0, 2 * Math.PI); // Oberer rechter Kreis
            L09_Ententeich.crc2.arc(this.positionX - 15, this.positionY - 10, 20, 0, 2 * Math.PI); // Oberer linker Kreis
            L09_Ententeich.crc2.fill();
        }
    }
    L09_Ententeich.Wolke = Wolke;
})(L09_Ententeich || (L09_Ententeich = {}));
//# sourceMappingURL=Wolke%20Versuch%202.js.map