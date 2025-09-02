import { Square } from "./Square";

export class GameBoard{

    private grid: Square[][];

    constructor(){
        this.grid =  [
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()],
        ];
    }

    getGrid(){
        return this.grid;
    }

    getSquare(xCoord: number, yCoord: number): Square{

        return this.getGrid()[xCoord][yCoord] 
    }

    setSquare(square: Square, xCoord: number, yCoord: number): void{

       this.getGrid()[xCoord][yCoord] = square;
    }  
   
}

