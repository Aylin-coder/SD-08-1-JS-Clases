export class Player {
    constructor(name,level) {
      this.name=name;
      this.level=level;
      
    }
  }

const jugador = new Player("Diana",100);
console.log(jugador.name);
console.log(jugador.level);