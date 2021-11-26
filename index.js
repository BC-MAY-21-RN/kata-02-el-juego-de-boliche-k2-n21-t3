// Hugonetor <halvarez0@ucol.mx>
//AangelF <Aangel.Flores.R@gmail.com> 
//GerardoIbarra <libarra2@ucol.mx>
const Game = require('./src/Game')

const game = new Game();

game.comenzarJuego()

//Reglas del Juego
/*
En total son 10 turnos.
En total hay 10 pinos
En cada turno hay 2 tiros
Si en el primer tiro se hace un strike, no se hace el siguiente tiro y se pasa al siguiente turno y se suman los dos tiros siguientes.
Si no se tiran todos los pinos en el primer tiro, se deben tumbar los que restan en el segundo.
Si se tumban los que restan en el segundo tiro se hace un Spare y se suman los puntos del siguiente tiro.
El ultimo turno consta de 3 tiros.

*/