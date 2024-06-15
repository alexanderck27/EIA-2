"use strict";
var L10_Inheritance;
(function (L10_Inheritance) {
    window.addEventListener("load", handleLoad);
    let line = 0.46;
    let ducks = [];
    let clouds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Inheritance.crc2 = canvas.getContext("2d");
        canvas.width = 1440;
        canvas.height = 780;
        let horizon = L10_Inheritance.crc2.canvas.height * line;
        L10_Inheritance.Static.drawBackground();
        L10_Inheritance.Static.drawSky();
        L10_Inheritance.Static.drawGrass();
        L10_Inheritance.Static.drawHorizon(horizon);
        L10_Inheritance.Static.drawMountain(200, horizon, 400, 100, 600, horizon, "grey");
        L10_Inheritance.Static.drawPond(L10_Inheritance.crc2.canvas.width / 2, horizon + 50, 200, 100);
        L10_Inheritance.Static.drawSun({ x: L10_Inheritance.crc2.canvas.width - 100, y: 75 });
        clouds.push(new L10_Inheritance.Wolke(new L10_Inheritance.Vector(100, 150), new L10_Inheritance.Vector(100, 0), 100));
        clouds.push(new L10_Inheritance.Wolke(new L10_Inheritance.Vector(300, 100), new L10_Inheritance.Vector(30, 0), 100));
        clouds.push(new L10_Inheritance.Wolke(new L10_Inheritance.Vector(500, 130), new L10_Inheritance.Vector(60, 0), 100));
        for (let i = 0; i < 8; i++) {
            ducks.push(createDuck());
        }
        setInterval(() => animate(horizon, clouds), 40); // 25fps
    }
    function createDuck() {
        let r = Math.random();
        let state = "schwimmen";
        let pondX = (L10_Inheritance.crc2.canvas.width - 700) / 2;
        let pondY = L10_Inheritance.crc2.canvas.height * 0.7 - 200 / 2;
        let x = pondX + Math.random() * 700;
        let y = pondY + Math.random() * 200;
        if (r < 0.3) {
            state = "stehen";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 80;
        }
        else if (r > 0.8) {
            state = "tauchen";
            x = pondX + Math.random() * 700;
            y = pondY + Math.random() * 100;
        }
        let initialPosition = new L10_Inheritance.Vector(x, y);
        let pondArea = { x: pondX, y: pondY, width: 700, height: 200 };
        let duck = new L10_Inheritance.Ente(initialPosition, pondArea, state, false);
        return duck;
    }
    function animate(horizon, clouds) {
        L10_Inheritance.crc2.clearRect(0, 0, L10_Inheritance.crc2.canvas.width, L10_Inheritance.crc2.canvas.height);
        L10_Inheritance.Static.drawBackground();
        L10_Inheritance.Static.drawSky();
        L10_Inheritance.Static.drawGrass();
        L10_Inheritance.Static.drawHorizon(horizon + 30);
        L10_Inheritance.Static.drawMountain(200, horizon + 30, 400, 100, 600, horizon + 30, "grey");
        L10_Inheritance.Static.drawPond(L10_Inheritance.crc2.canvas.width / 2, horizon + 200, 800, 200);
        L10_Inheritance.Static.drawSun({ x: L10_Inheritance.crc2.canvas.width - 700, y: 90 });
        clouds.forEach(cloud => cloud.move(20 / 1000));
        clouds.forEach(cloud => cloud.draw());
        let treePositions = [
            { x: 50, y: 560 },
            { x: 900, y: 450 },
            { x: 1200, y: 480 },
            { x: 1060, y: 650 }
        ];
        treePositions.forEach(position => L10_Inheritance.Static.drawTree(position));
        ducks.forEach(duck => {
            duck.move(); // Enten bewegen
            duck.draw(); // Enten zeichnen
        });
    }
})(L10_Inheritance || (L10_Inheritance = {}));
//# sourceMappingURL=Hauptdatei.js.map