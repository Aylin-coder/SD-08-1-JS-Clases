export class Player {
    constructor(name,level) {
      this.name=name;
      this.level=level;
      
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}`);
      }
  }

  const player1 = new Player("Diana", 100);
  player1.info(); 
