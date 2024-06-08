"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            this.position = _position;
            this.velocity = new L10_Inheritance.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.updatePosition();
        }
        updatePosition() {
            this.position.add(this.velocity);
        }
    }
    L10_Inheritance.Moveable = Moveable;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=beweglich.js.map