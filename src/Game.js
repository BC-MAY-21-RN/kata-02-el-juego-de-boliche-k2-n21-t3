module.exports = class Game{
    //Declaracion de las propiedades del juego
    constructor(){
        this.strike = false;
        this.spare = false;
        this.turnos = 10;
        this.pinos = 10;
        this.tiros = 2;
        this.resultado = 0;
        //Declaracion del tablero con sus 10 turnos
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

    //Metodo Principal
    comenzarJuego(){
        //Imprimimos la tabla en ceros
        console.table(this.tablero);
        //Creacion de un for para recorrer los 10 turnos del juego
        for(let i = 0; i < this.turnos; i++){
            //En cada iteracion se realiza el primer tiro
            this.primerTiro(this.tablero[i])
            //Si el primer tiro es strike se salta al siguiente
            if(this.strike == true){
                //Suma de los valores al tablero con solo el primer tiro
                this.tablero[i].resultado = this.tablero[i].primerTiro + this.tablero[i].segundoTiro;
                this.resultado += this.tablero[i].resultado;
                //Devolver el valor del strike a falso
                this.strike = false;
                //Terminar con la iteracion
                continue;
            }
            //Realizacion del segundo tiro
            this.segundoTiro(this.tablero[i])

            //Suma de los resultados contando el segundo tiro
            this.tablero[i].resultado = this.tablero[i].primerTiro + this.tablero[i].segundoTiro;
            this.resultado += this.tablero[i].resultado;
        }
        //NUEVO METODO...
        const resultados = actualizarResultados()

        //Impresion de los resultados finales
        console.table(this.tablero);
        console.log( this.resultado );
        
    }

    //En curso...
    actualizarResultados(){
        for(let i = 0; i < this.tablero.length; i++){
            if(this.tablero[i].primerTiro === 10){
                
            }
        }
    }

    //Metodo del primer tiro
    primerTiro(tablero){
        //Metodo aleatorio para obtener un numero del 1 al 10
        let primerTiro = Math.floor( Math.random()*this.pinos ) + 1;
        //Agregar los valores a su iteracion
        tablero.primerTiro = primerTiro;
        this.pinos -= primerTiro;
        //Validar si es un strike
        if(primerTiro == 10){
            this.strike = true;
            this.pinos = 10;
        }
    }
    //Metodo del segundo tiro
    segundoTiro(tablero){
        //Metodo aleatorio para obtener un numero del 1 al 10
        let segundoTiro = Math.floor( Math.random()*this.pinos ) + 1;
        tablero.segundoTiro = segundoTiro;
        //Validar si es un spare
        if(segundoTiro == this.pinos){
            this.spare = true;
        }
        this.pinos = 10;
    }
}
