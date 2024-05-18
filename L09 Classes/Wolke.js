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
            this.positionX += 0.5;
            const screenWidth = window.innerWidth;
            if (this.positionX > screenWidth) {
                this.positionX = -100;
            }
        }
        draw() {
            L09_Ententeich.crc2.save();
            L09_Ententeich.crc2.translate(this.positionX, this.positionY);
            L09_Ententeich.crc2.beginPath();
            L09_Ententeich.crc2.moveTo(75, 0);
            L09_Ententeich.crc2.lineTo(0, 0);
            L09_Ententeich.crc2.ellipse(10, 0, 40, 35, 0, Math.PI, 0, false);
            L09_Ententeich.crc2.ellipse(40, 0, 45, 50, 0, Math.PI, 0, false);
            L09_Ententeich.crc2.ellipse(100, 0, 40, 35, 0, Math.PI, 0, false);
            L09_Ententeich.crc2.closePath();
            L09_Ententeich.crc2.fillStyle = this.color;
            L09_Ententeich.crc2.fill();
            L09_Ententeich.crc2.restore();
        }
    }
    L09_Ententeich.Wolke = Wolke;
})(L09_Ententeich || (L09_Ententeich = {}));
//# sourceMappingURL=Wolke.js.map