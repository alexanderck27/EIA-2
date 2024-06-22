"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class BreadCrumps extends Drawable {
        constructor(_x, _y) {
            //console.log("BreadCrumps Constructor")
            super(_x, _y);
        }
        checkHit() {
            this.draw();
        }
        draw() {
            let numberOfParticles = 1; // Anzahl der Partikel
            let breadWidth = 80; // Breite
            let breadHeight = 70; // Höhe
            let random = pseudoRandom(42);
            for (let i = 0; i < numberOfParticles; i++) {
                let x = this.x + (i * (breadWidth / numberOfParticles)); // Feste X-Position 
                let y = this.y + (random() * breadHeight); // Zufällige Y-Position
                this.drawBreadParticle(x, y); // Partikel zeichnen
            }
        }
        drawBreadParticle(_x, _y) {
            L10_Inheritance.crc2.save();
            L10_Inheritance.crc2.beginPath();
            L10_Inheritance.crc2.arc(_x, _y, 4, 0, Math.PI * 2);
            L10_Inheritance.crc2.fillStyle = "darkbrown";
            L10_Inheritance.crc2.fill();
            L10_Inheritance.crc2.restore();
        }
    }
    L10_Inheritance.BreadCrumps = BreadCrumps;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Brotkrumen.js.map