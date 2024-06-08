namespace L10_Inheritance {

    export class Ente extends Moveable {
        public pondArea: { x: number, y: number, width: number, height: number };
        state: string;
        mirror: boolean;
        underWater: number;

        constructor(initialPosition: Vector, pondArea: { x: number, y: number, width: number, height: number}, _state: string, _mirror: boolean) {
            super(initialPosition);
            this.velocity = new Vector((Math.random() - 0.6) * 2, (Math.random() - 0.4) * 2);
            this.pondArea = pondArea;
            this.state = _state;
            this.mirror = _mirror;
            this.underWater = -1;
        }

        draw(): void {
            switch (this.state) {
                case "schwimmen":
                    this.drawSwimming();
                    break;
                case "tauchen":
                    this.drawTail();
                    break;
                default:
                    this.drawStanding();
            }
        }

        drawSwimming(): void {
            crc2.beginPath(); // Körper
            crc2.ellipse(this.position.x, this.position.y, 40, 20, 0, 0, 2 * Math.PI);
            crc2.fillStyle = 'yellow';
            crc2.fill();

            crc2.beginPath(); // Kopf
            crc2.arc(this.position.x + 25, this.position.y - 20, 20, 0, 2 * Math.PI);
            crc2.fillStyle = 'yellow';
            crc2.fill();

             // Schwarzes Auge
            crc2.beginPath();
            crc2.arc(this.position.x + 33, this.position.y - 22, 3, 0, 2 * Math.PI);
            crc2.fillStyle = 'black';
            crc2.fill();

            crc2.beginPath(); // Schnabel
            crc2.moveTo(this.position.x + 45, this.position.y - 15);
            crc2.lineTo(this.position.x + 60, this.position.y - 15);
            crc2.lineTo(this.position.x + 45, this.position.y - 25);
            crc2.closePath();
            crc2.fillStyle = 'orange';
            crc2.fill();

            this.move();
            this.updatePosition();
        }

        drawTail(): void { //tauchend
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 20, Math.PI, 2 * Math.PI); // Halber Kreis
            crc2.closePath();
            crc2.fill();

            this.move();
            this.updatePosition();
        }

        drawStanding(): void {
            crc2.beginPath(); // Körper
            crc2.ellipse(this.position.x, this.position.y, 40, 20, 0, 0, 2 * Math.PI);
            crc2.fillStyle = 'yellow';
            crc2.fill();
            
            crc2.beginPath(); // Kopf
            crc2.arc(this.position.x + 25, this.position.y - 20, 20, 0, 2 * Math.PI);
            crc2.fillStyle = 'yellow';
            crc2.fill();
            
            // Schwarzes Auge
            crc2.beginPath();
            crc2.arc(this.position.x + 33, this.position.y - 22, 3, 0, 2 * Math.PI);
            crc2.fillStyle = 'black';
            crc2.fill();
            
            crc2.beginPath(); // Schnabel
            crc2.moveTo(this.position.x + 45, this.position.y - 15);
            crc2.lineTo(this.position.x + 60, this.position.y - 15);
            crc2.lineTo(this.position.x + 45, this.position.y - 25);
            crc2.closePath();
            crc2.fillStyle = 'orange';
            crc2.fill();
            
            // Linkes Bein
            crc2.beginPath();
            crc2.moveTo(this.position.x - 10, this.position.y + 20);
            crc2.lineTo(this.position.x - 10, this.position.y + 30);
            crc2.lineTo(this.position.x - 5, this.position.y + 30);
            crc2.lineTo(this.position.x - 5, this.position.y + 20);
            crc2.closePath();
            crc2.fillStyle = 'orange';
            crc2.fill();

            // Linker Fuß
            crc2.beginPath();
            crc2.moveTo(this.position.x - 12, this.position.y + 25);
           crc2.lineTo(this.position.x, this.position.y + 30);
           crc2.lineTo(this.position.x - 22, this.position.y + 30);
            crc2.closePath();
            crc2.fillStyle = 'orange';
            crc2.fill();

           // Rechtes Bein
           crc2.beginPath();
           crc2.moveTo(this.position.x + 10, this.position.y + 20);
           crc2.lineTo(this.position.x + 10, this.position.y + 30);
           crc2.lineTo(this.position.x + 15, this.position.y + 30);
           crc2.lineTo(this.position.x + 15, this.position.y + 20);
           crc2.closePath();
           crc2.fillStyle = 'orange';
           crc2.fill();

           // Rechter Fuß
           crc2.beginPath();
           crc2.moveTo(this.position.x + 12, this.position.y + 25);
           crc2.lineTo(this.position.x, this.position.y + 30);
           crc2.lineTo(this.position.x + 22, this.position.y + 30);
           crc2.closePath();
           crc2.fillStyle = 'orange';
           crc2.fill();
            
            this.move();
            this.updatePosition();
        }

        move(): void {
            let offsetX: number = 1;
            let movementAreaWidth: number = 800; // Breite des Bewegungsbereichs
            let movementAreaHeight: number = 150; // Höhe des Bewegungsbereichs

            if (this.state === "schwimmen") {
                if (Math.random() <= 0.011) {
                    this.state = "tauchen";
                }
            } else if (this.state === "tauchen") {
                this.underWater++;
                if (this.underWater >= 80 && Math.random() >= 0.011) {
                    this.state = "schwimmen";
                    this.underWater = -1;
                }
            }

            // linker Rand
            if (this.position.x <= this.pondArea.x) {
                this.mirror = false;
            } 
            // rechter Rand
            else if (this.position.x >= this.pondArea.x + movementAreaWidth - 100) {
                this.mirror = true;
            }

            if (this.mirror) {
                this.position.x -= offsetX;
            } else {
                this.position.x += offsetX;
            }

            if (this.position.y <= this.pondArea.y) {
                this.position.y = this.pondArea.y;
            } else if (this.position.y >= this.pondArea.y + movementAreaHeight) {
                this.position.y = this.pondArea.y + movementAreaHeight;
            }
        }

        updatePosition(): void {
        }
    }
}
