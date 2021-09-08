
//Se tira un dado y da un resultado de 1 a 6
class Dice{
    throw(){
        return Math.floor(Math.random()*6+1)
    }
}

//Esta clase tiene como parametros el nombre y la posición, y de
//métodos cuenta con un acceso a la posición y un método para
//tirar el dado y actualizar la posicion
class Player{
    constructor(name,position){
        this.name=name;
        this.position=position;
    }

    advance(){
        let move= dice.throw();
        this.position += move;
        console.log(`${this.name} obtuvo un ${move} en el dado`);
    }

    getPosition(){
        return this.position;
    }

    setPosition(newPosition){
        this.position=newPosition;
    }

    getName(){
        return this.name;
    }
}

//Esta clase es la del tablero, en el constructor cuenta con un tablero,
//que es un array de 106 posiciones, yendo del 0 al 100, por el cual
//se moverán los jugadores, al final contiene seis  100 para que el numero
//maximo de movimientos sea 100.

//Escalera 1: 3=>10
//Escalera 2: 9=>30
//Escalera 3: 21=>40
//Escalera 4: 28=>39
//Escalera 5: 50=>64
//Escalera 6: 61=>70
//Escalera 7: 74=>81
//Escalera 8: 78=>90
//Escalera 9: 83=>94
//Escalera 10: 90=>96

//Serpiente 1: 99=>80
//Serpiente 2: 85=>75
//Serpiente 3: 66=>54
//Serpiente 4: 58=>47
//Serpiente 5: 52=>35
//Serpiente 6: 44=>25
//Serpiente 7: 33=>15
//Serpiente 8: 27=>19
//Serpiente 9: 16=>8
//Serpiente 10: 13=>6

class Board{
    constructor(){
        this.gameboard = [0, 1, 2, 10, 4, 5, 6, 7, 8 , 30, 10,
                    11, 12, 6, 14, 15, 8, 17, 18, 19, 20,
                    40, 22, 23, 24, 25, 26, 19, 39, 29, 30,
                    31, 32, 15, 34, 35, 36, 37, 38, 39, 40,
                    41, 42, 43, 25, 45, 46, 47, 48, 49, 64,
                    51, 35, 53, 54, 55, 56, 57, 47, 59, 60,
                    70, 62, 63, 64, 65, 54, 67, 68, 69, 70,
                    71, 72, 73, 81, 75, 76, 77, 90, 79, 80,
                    81, 82, 94, 84, 75, 86, 87, 88, 89, 96,
                    91, 92, 93, 94, 95, 96, 97, 98, 80, 100,
                    100, 100, 100, 100, 100];
    }
    
    //Este método de acceso es para obtener el array completo, aunque
    //también puede ser accesado directamente.
    getGameboard(){
        return this.gameboard;
    }

    //En este método se inicializa el juego y recibe como parametro dos 
    //jugadores.
    playGame(player1, player2){
        while(player1.getPosition()<100 && player2.getPosition()<100){
            player1.advance();
            this.checkBoard(player1, game1);
            player2.advance();
            this.checkBoard(player2, game1);
        }
        this.objective(player1, player2);
    }

    checkBoard(player, board){
        player.setPosition(board.gameboard[player.getPosition()]);
        console.log(`${player.getName()} avanzó hasta la posición ${player.getPosition()}`);
    }

    objective(player1, player2){
        if(player1.getPosition() >= 100 && player2.getPosition() >= 100){
            console.log(`${player1.getName()} y ${player2.getName()} empataron`);
        } else if(player1.getPosition() > player2.getPosition()){
            console.log(`${player1.getName()} ganó serpientes y escaleras`);
        } else{
            console.log(`${player2.getName()} ganó serpientes y escaleras`);
        }
    }
}

let dice= new Dice;

let player1= new Player("GustavoHM", 0);
let player2= new Player("Valeria A", 0);

let game1= new Board;

console.log(game1.playGame(player1, player2));