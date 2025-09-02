import { Player } from "./Player";

export class Square{

    private player: Player | null = null;

    constructor(){
    }

    setPlayer(player: Player){
        this.player = player
    }

    getPlayer(){
        return this.player;
    }
    
}

