namespace L09_Ententeich {

    import { Cloud } from "./Wolke Versuch3.ts"; 
    import { Vector } from "./Wolke Versuch3.ts"; 

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let horizon: number = 365;

        drawBackground();
        drawSky();
        drawGrass();
        drawHorizon(horizon);
        drawMountain(100, crc2.canvas.height / 2, 300, 200, 500, crc2.canvas.height / 2, '#999999');
        drawMountain(400, crc2.canvas.height / 2, 600, 100, 800, crc2.canvas.height / 2, '#888888');
        drawPond(600, crc2.canvas.height * 0.75, 200, 100);
        drawDuck(650, crc2.canvas.height * 0.78 - 50);
        drawDuck(550, crc2.canvas.height * 0.75 - 50);
        drawDuck(570, crc2.canvas.height * 0.85 - 50);
        drawCloud(200, 100);
        drawCloud(500, 130);
        drawCloud(1500, 150);  
        drawCloud(1200, 110);
        drawTree({ x: 50, y: 560 });
        drawTree({ x: 900, y: 450 });
        drawTree({ x: 1200, y: 480 });
        drawSun({ x: 860, y: 75 });

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        const clouds: Cloud[] = [];
        clouds.push(new Cloud(new Vector(-200, 8), new Vector(50, 0), 100));
        clouds.push(new Cloud(new Vector(-600, 5), new Vector(20, 0), 100));
        clouds.push(new Cloud(new Vector(-950, 10), new Vector(80, 0), 100));
        clouds.push(new Cloud(new Vector(-900, 12), new Vector(40, 0), 100));

        animate(clouds);
    }

    function animate(clouds: Cloud[]): void {
        crc2.putImageData(imgData, 0, 0); // Canvas zurücksetzen

        clouds.forEach(cloud => cloud.move(1 / 80));
        clouds.forEach(cloud => cloud.draw());

        requestAnimationFrame(() => animate(clouds)); // Animation fortsetzen
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.5, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawGrass(): void {
        crc2.fillStyle = 'green';
        crc2.fillRect(0, crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height / 2);
    }

    function drawHorizon(horizon: number): void {
        crc2.beginPath();
        crc2.moveTo(0, horizon);
        crc2.lineTo(crc2.canvas.width, horizon);
        crc2.strokeStyle = 'black';
        crc2.stroke();
    }

    function drawMountain(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string): void {
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x3, y3);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
    }

    function drawSky(): void {
        crc2.fillStyle = 'lightblue';
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height / 2);
    }

    function drawPond(centerX: number, centerY: number, width: number, height: number): void {
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, width / 1, height / 2, 0, 0, 2 * Math.PI);
        crc2.fillStyle = 'blue';
        crc2.fill();
        crc2.strokeStyle = '#8B4513';
        crc2.lineWidth = 5;
        crc2.stroke();
    }

    function drawDuck(centerX: number, centerY: number): void {
        crc2.beginPath(); //Körper
        crc2.ellipse(centerX, centerY, 40, 20, 0, 0, 2 * Math.PI);
        crc2.fillStyle = 'yellow';
        crc2.fill();

        crc2.beginPath(); //Kopf
        crc2.arc(centerX + 25, centerY - 20, 20, 0, 2 * Math.PI);
        crc2.fillStyle = 'yellow';
        crc2.fill();

        crc2.font = 'bold 15px Arial';
        crc2.fillStyle = 'black';
        crc2.fillText('x', centerX + 33, centerY - 22);


        crc2.beginPath(); //Schnabel
        crc2.moveTo(centerX + 45, centerY - 15);
        crc2.lineTo(centerX + 60, centerY - 15);
        crc2.lineTo(centerX + 45, centerY - 25);
        crc2.closePath();
        crc2.fillStyle = 'orange';
        crc2.fill();
    }

    function drawCloud(centerX: number, centerY: number) {
        crc2.fillStyle = 'white';
        crc2.beginPath();
        crc2.arc(centerX, centerY, 20, 0, 2 * Math.PI); // Mittlerer Kreis
        crc2.arc(centerX + 30, centerY + 10, 25, 0, 2 * Math.PI); // Rechter Kreis
        crc2.arc(centerX - 30, centerY + 10, 20, 0, 2 * Math.PI); // Linker Kreis
        crc2.arc(centerX + 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer rechter Kreis
        crc2.arc(centerX - 15, centerY - 10, 20, 0, 2 * Math.PI); // Oberer linker Kreis
        crc2.fill();
    }

    function drawTree(position: Vector): void {
        // Trunk
        crc2.fillStyle = "brown";
        crc2.fillRect(position.x + 90, position.y + 10, 60, -100);
      
        // Crown
        crc2.save();
        crc2.fillStyle = "limegreen";
        crc2.beginPath();
        crc2.arc(position.x + 120, position.y - 200, 120, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        let centerX: number = _position.x;
        let centerY: number = _position.y;
        let radius: number = 50;
        let rays: number = 12; // Anzahl der Sonnenstrahlen
    
        crc2.save();
        crc2.translate(centerX, centerY);
        crc2.fillStyle = "yellow"; // Farbe der Sonne
    
        // Zeichne den Kreis als Sonnenzentrum
        crc2.beginPath();
        crc2.arc(0, 0, radius, 0, 2 * Math.PI);
        crc2.fill();
    
        // Zeichne die Sonnenstrahlen
        crc2.strokeStyle = "yellow"; // Farbe der Strahlen
        crc2.lineWidth = 2; // Breite der Strahlen
    
        for (let i = 0; i < rays; i++) {
            let angle: number = (i * 360 / rays) * Math.PI / 180;
            let rayLength: number = radius * 1.8; // Länge der Strahlen
    
            let startX: number = Math.cos(angle) * radius;
            let startY: number = Math.sin(angle) * radius;
            let endX: number = Math.cos(angle) * rayLength;
            let endY: number = Math.sin(angle) * rayLength;
    
            // Zeichne den Sonnenstrahl
            crc2.beginPath();
            crc2.moveTo(startX, startY);
            crc2.lineTo(endX, endY);
            crc2.stroke();
        }
    }

    class Vector {
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

    class Cloud {
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

            if (this.position.x > crc2.canvas.width) {
                this.position.x = 0;
            }
        }

        draw(): void {
            drawCloud(this.position.x, this.position.y);
        }
    }
}
