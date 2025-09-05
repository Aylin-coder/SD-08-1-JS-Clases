export class Player {
    constructor(name,level) {
      this.name=name;
      this.level=level;
      
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}`);
      }

    levelUp() {
        this.level += 1;
    }
  }

 
const player1 = new Player("Diana", 10);
console.log(player1.level); 
player1.levelUp();          
console.log(player1.level); 
player1.levelUp();         
player1.info();   
