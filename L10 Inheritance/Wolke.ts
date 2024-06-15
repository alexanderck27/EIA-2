namespace L10_Inheritance {

    export class Wolke extends Moveable {
        size: number;
        private Wind: HTMLAudioElement;

        constructor(position: Vector, velocity: Vector, size: number) {
            super(position);
            this.velocity = velocity;
            this.size = size;
            this.Wind = new Audio('Sounds/wind.mp3');
            this.addClickListener();
        }


        private addClickListener(): void { 
            crc2.canvas.addEventListener("click", this.handleClick.bind(this));
        }

        private handleClick(event: MouseEvent): void {
            let rect = crc2.canvas.getBoundingClientRect();
            let x = event.clientX - rect.left; 
            let y = event.clientY - rect.top; 

            if (this.isClicked(x, y)) { 
                this.Wind.play();
            }
        }

        private isClicked(x: number, y: number): boolean {
            let dx = x - this.position.x;
            let dy = y - this.position.y; 
            let distance = Math.sqrt(dx * dx + dy * dy);
            return distance <= 30; 
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
