namespace L10_Inheritance {
    
    export class Moveable {
        protected position: Vector;
        protected velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
        }

        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.updatePosition();
        }

        public updatePosition(): void {
            this.position.add(this.velocity);
        }
    }
}
