module.exports = class Game{
    constructor(){
        this.strike = false;
        this.spare = false;
        this.turnos = 10;
        this.pinos = 10;
        this.tiros = 2;
        this.tablero = [
            {   //Turno 1
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 2
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 3
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 4
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 5
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 6
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 7
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 8
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 9
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            },
            {   //Turno 10
                primerTiro:0,
                segundoTiro:0,
                resultado:0
            }
        
        ];
    }

    comenzarJuego(){
        console.table(this.tablero);
        for(let i = 0; i < this.turnos; i++){
            this.primerTiro(this.tablero[i])
            if(this.strike == true){
                continue;
            }else{
                this.segundoTiro(this.tablero[i])
            }
            this.tablero[i].resultado = this.tablero[i].primerTiro + this.tablero[i].segundoTiro;
        }
        console.table(this.tablero);
        
    }
    primerTiro(tablero){
        let primerTiro = Math.floor( Math.random()*this.pinos ) + 1;
        tablero.primerTiro = primerTiro;
        this.pinos -= primerTiro;
        if(primerTiro == 10){
            this.strike = true;
            this.pinos = 10;
        }
    }
    segundoTiro(tablero){
        let segundoTiro = Math.floor( Math.random()*this.pinos ) + 1;
        tablero.segundoTiro = segundoTiro;
        if(segundoTiro == this.pinos){
            this.spare = true;
        }
        this.pinos = 10;
    }
}
