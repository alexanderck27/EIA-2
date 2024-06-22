namespace L10_Inheritance {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let line: number = 0.46;
    let ducks: Ente[] = [];
    let clouds: Wolke[] = [];
    let breadCrumbs: Brotkrümel[] = []; // Korrekte Deklaration der Brotkrümel-Variable

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = 1440;
        canvas.height = 780;

        let horizon: number = crc2.canvas.height * line;

        Static.drawBackground();
        Static.drawSky();
        Static.drawGrass();
        Static.drawHorizon(horizon);
        Static.drawMountain(200, horizon, 400, 100, 600, horizon, "grey");
        Static.drawPond(crc2.canvas.width / 2, horizon + 50, 200, 100);
        Static.drawSun({ x: crc2.canvas.width - 100, y: 75 });

        clouds.push(new Wolke(new Vector(100, 150), new Vector(100, 0), 100));
        clouds.push(new Wolke(new Vector(300, 100), new Vector(30, 0), 100));
        clouds.push(new Wolke(new Vector(500, 130), new Vector(60, 0), 100));

        for (let i = 0; i < 8; i++) {
            ducks.push(createDuck());
        }

        canvas.addEventListener('click', handleCanvasClick);

        setInterval(() => animate(horizon, clouds), 40); // 25fps
    }

    class Brotkrümel {
        position: Vector;

        constructor(x: number, y: number) {
            this.position = new Vector(x, y);
        }

        draw(crc2: CanvasRenderingContext2D): void {
            crc2.fillStyle = 'brown';
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2);
            crc2.fill();
        }
    }

    function handleCanvasClick(event: MouseEvent): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        breadCrumbs.push(new Brotkrümel(mouseX, mouseY));
    }

    function createDuck(): Ente {
        let r: number = Math.random();
        let state: string = "schwimmen";

        let pondX: number = (crc2.canvas.width - 700) / 2;
        let pondY: number = crc2.canvas.height * 0.7 - 200 / 2;
        let x: number = pondX + Math.random() * 700;
        let y: number = pondY + Math.random() * 200;

        if (r < 0.3) {
            state = "stehen";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 80;
        } else if (r > 0.8) {
            state = "tauchen";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 100;
        }

        let initialPosition = new Vector(x, y);
        let pondArea = { x: pondX, y: pondY, width: 700, height: 200 };
        let duck = new Ente(initialPosition, pondArea, state, false);
        return duck;
    }

    function animate(horizon: number, clouds: Wolke[]): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Static.drawBackground();
        Static.drawSky();
        Static.drawGrass();
        Static.drawHorizon(horizon + 30);
        Static.drawMountain(200, horizon + 30, 400, 100, 600, horizon + 30, "grey");
        Static.drawPond(crc2.canvas.width / 2, horizon + 200, 800, 200);
        Static.drawSun({ x: crc2.canvas.width - 700, y: 90 });

        clouds.forEach(cloud => cloud.move(20 / 1000));
        clouds.forEach(cloud => cloud.draw());

        let treePositions = [
            { x: 50, y: 560 },
            { x: 900, y: 450 },
            { x: 1200, y: 480 },
            { x: 1060, y: 650 }
        ];

        treePositions.forEach(position => Static.drawTree(position));

        breadCrumbs.forEach(crumb => crumb.draw(crc2)); // Brotkrümel zeichnen

        ducks.forEach(duck => {
            duck.move(); // Enten bewegen
            duck.draw(); // Enten zeichnen
        });
    }
}
