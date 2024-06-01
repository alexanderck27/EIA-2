"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = exports.Vector = void 0;
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
exports.Vector = Vector;
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
    }
    draw() {
        drawCloud(this.position.x, this.position.y);
    }
}
exports.Cloud = Cloud;
function drawCloud(centerX, centerY) {
    crc2.fillStyle = 'white';
    crc2.beginPath();
    crc2.arc(centerX, centerY, 20, 0, 2 * Math.PI); // Mittlerer Kreis
    crc2.arc(centerX + 30, centerY + 10, 25, 0, 2 * Math.PI); // Rechter Kreis
    crc2.arc(centerX - 30, centerY + 10, 20, 0, 2 * Math.PI); // Linker Kreis
    crc2.arc(centerX + 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer rechter Kreis
    crc2.arc(centerX - 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer linker Kreis
    crc2.fill();
}
//# sourceMappingURL=Wolke%20Versuch3.js.map