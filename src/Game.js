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
                tercerTiro: Math.floor( Math.random()*this.pinos ) + 1,
                resultado:0
            }
        
        ];
    }

    //Metodo Principal
    comenzarJuego(){
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

        }
        //NUEVO METODO...
        //const resultados = actualizarResultados()
        this.actualizarResultados();
        //Impresion de los resultados finales
        
    }

    //En curso...
    actualizarResultados(){
        for(let i = 0; i < this.tablero.length; i++){//comenzamos ciclo
            if(i != 9){
                if(this.tablero[i].primerTiro === 10 ){//verificamos que el primer tiro sea un strike

                    this.tablero[i].resultado += this.tablero[i+1].primerTiro;

                    if(this.tablero[i] == 8 && this.tablero[9].primerTiro == 10 && this.tablero[8].primerTiro == 10){
                        this.tablero[i].resultado += this.tablero[i+1].primerTiro + this.tablero[i+1].segundoTiro;

                        continue;
                    }
                    //sumamos el primer tiro del siguiente turno
                    if(this.tablero[i+1].primerTiro === 10){ //verificamos que en el siguiente turno su primer tiro sea un strike
                        if(this.tablero[i+2].primerTiro === 10){//verificamos el primer tiro 2do tiro siguiente, que sea strike
                            this.tablero[i].resultado += this.tablero[i+2].primerTiro;
                            //sumamos nuestro resultado con el del 2do turno pero su primer tiro
                        }
                    }else{
                        this.tablero[i].resultado += this.tablero[i+1].segundoTiro;
                        //sumamos nustro resultado con el del siguinte turno con el 2do tiro
                    }
                    
                //Validacion del SPARE
                }else if((this.tablero[i].primerTiro + this.tablero[i].segundoTiro) == 10){
                    if(i != 9){
                        this.tablero[i].resultado += this.tablero[i+1].primerTiro;
                    }
                }
            }else{
                if(this.tablero[i].primerTiro === 10){
                    this.tablero[i].segundoTiro = Math.floor( Math.random()*this.pinos ) + 1;
                    
                    this.tablero[i].resultado += this.tablero[i].segundoTiro + this.tablero[i].tercerTiro;

                }else if((this.tablero[i].primerTiro + this.tablero[i].segundoTiro) == 10){
                    continue;
                }
            }
            


            this.resultado += this.tablero[i].resultado;
        }//cierre de ciclo
        console.table(this.tablero);//mostramos en la tabla los valores 
        console.log( `La puntuacion total es de: ${(this.resultado + this.tablero[9].tercerTiro)}` );
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