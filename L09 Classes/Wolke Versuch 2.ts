namespace L09_Ententeich {
    export class Wolke {
        positionX: number;
        positionY: number;
        color: string;

        constructor(_positionX: number, _positionY: number, _color: string) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
        }

        move(): void {
            this.positionX += 0.5; // Bewegung nach rechts
            const screenWidth = window.innerWidth;

            // Zurücksetzen, wenn die Wolke den rechten Bildschirmrand erreicht
            if (this.positionX > screenWidth) {
                this.positionX = -100; // Startet die Wolke links vom Bildschirmrand
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.positionX, this.positionY, 20, 0, 2 * Math.PI); // Mittlerer Kreis
            crc2.arc(this.positionX + 30, this.positionY + 10, 25, 0, 2 * Math.PI); // Rechter Kreis
            crc2.arc(this.positionX - 30, this.positionY + 10, 20, 0, 2 * Math.PI); // Linker Kreis
            crc2.arc(this.positionX + 15, this.positionY - 10, 20, 0, 2 * Math.PI); // Oberer rechter Kreis
            crc2.arc(this.positionX - 15, this.positionY - 10, 20, 0, 2 * Math.PI); // Oberer linker Kreis
            crc2.fill();
        }
    }
}