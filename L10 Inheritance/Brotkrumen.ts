namespace L10_Inheritance {
    export class BreadCrumps extends Drawable {

        constructor (_x:number, _y:number){
            //console.log("BreadCrumps Constructor")
            super(_x,_y)
        }

        public checkHit ():void {
            this.draw();
          }
    
        protected draw():void{
            
            let numberOfParticles: number = 1; // Anzahl der Partikel
            let breadWidth: number = 80; // Breite
            let breadHeight: number = 70; // Höhe
            let random = pseudoRandom(42)
        
            for (let i = 0; i < numberOfParticles; i++) {
                let x = this.x + (i * (breadWidth / numberOfParticles)); // Feste X-Position 
                let y = this.y + (random() * breadHeight); // Zufällige Y-Position
                this.drawBreadParticle(x, y); // Partikel zeichnen
            }
        }
    
        private drawBreadParticle(_x: number, _y: number): void {
      
            crc2.save();
            crc2.beginPath();
            crc2.arc(_x, _y, 4, 0, Math.PI * 2);
            crc2.fillStyle = "darkbrown"; 
            crc2.fill();
            crc2.restore();    
        }
    }
}    