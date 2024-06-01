namespace L09_Ententeich

export class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    scale(_factor: number): void {
        this.x *= _factor;
        this.y *= _factor;
    }

    add(_addend: Vector): void {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}

export class Cloud {
    position: Vector;
    velocity: Vector;
    size: number;

    constructor(position: Vector, velocity: Vector, size: number) {
        this.position = position;
        this.velocity = velocity;
        this.size = size;
    }

    move(_timeslice: number): void {
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
    }

    draw(): void {
        drawCloud(this.position.x, this.position.y);
    }
}

function drawCloud(centerX: number, centerY: number): void {
    crc2.fillStyle = 'white';
    crc2.beginPath();
    crc2.arc(centerX, centerY, 20, 0, 2 * Math.PI); // Mittlerer Kreis
    crc2.arc(centerX + 30, centerY + 10, 25, 0, 2 * Math.PI); // Rechter Kreis
    crc2.arc(centerX - 30, centerY + 10, 20, 0, 2 * Math.PI); // Linker Kreis
    crc2.arc(centerX + 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer rechter Kreis
    crc2.arc(centerX - 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer linker Kreis
    crc2.fill();
}
