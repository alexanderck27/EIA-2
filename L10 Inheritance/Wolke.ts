namespace L10_Inheritance {

    export class Wolke extends Moveable {
        size: number;

        constructor(position: Vector, velocity: Vector, size: number) {
            super(position);
            this.velocity = velocity;
            this.size = size;
        }

        public move(timeslice: number): void {
            const offsetX = this.velocity.x * timeslice;
            const offsetY = this.velocity.y * timeslice;

            this.position.add(new Vector(offsetX, offsetY));

            if (this.position.x > crc2.canvas.width + this.size) {
                this.position.x = -this.size;
            }
        }

        public draw(): void {
            crc2.beginPath();
            crc2.fillStyle = 'white';

            this.drawCircle(this.position.x, this.position.y, this.size * 0.5); // Mittlerer Kreis
            this.drawCircle(this.position.x + this.size * 0.6, this.position.y + this.size * 0.2, this.size * 0.6); // Rechter Kreis
            this.drawCircle(this.position.x - this.size * 0.6, this.position.y + this.size * 0.2, this.size * 0.5); // Linker Kreis
            this.drawCircle(this.position.x + this.size * 0.3, this.position.y - this.size * 0.3, this.size * 0.5); // Oberer rechter Kreis
            this.drawCircle(this.position.x - this.size * 0.3, this.position.y - this.size * 0.3, this.size * 0.5); // Oberer linker Kreis

            crc2.closePath();
            crc2.fill();
        }

        private drawCircle(x: number, y: number, radius: number): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, Math.PI * 2);
            crc2.restore();
            crc2.fill(); // Füllen des Kreises
        }
    }
}
