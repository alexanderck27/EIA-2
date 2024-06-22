"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L10_Inheritance.Vector = Vector;
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Vector.js.map