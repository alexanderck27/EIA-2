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
          this.positionX += 0.5;
          const screenWidth = window.innerWidth;

          if (this.positionX > screenWidth) {
              this.positionX = -100;
          }
      }

      draw(): void {
          crc2.save();
          crc2.translate(this.positionX, this.positionY);

          crc2.beginPath();
          crc2.moveTo(75, 0);
          crc2.lineTo(0, 0);
          crc2.ellipse(10, 0, 40, 35, 0, Math.PI, 0, false);
          crc2.ellipse(40, 0, 45, 50, 0, Math.PI, 0, false);
          crc2.ellipse(100, 0, 40, 35, 0, Math.PI, 0, false);
          crc2.closePath();

          crc2.fillStyle = this.color;
          crc2.fill();
          crc2.restore();
      }
  }
}
