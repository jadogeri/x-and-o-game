import { IconType } from "../types/IconType";

export class Player{
    private name : string;
    private icon : IconType = null;
    

    constructor(name: string){
        this.name = name;
    }

    setIcon(icon: IconType ): void{
        this.icon = icon;
    }

    getIcon(): IconType{
        return this.icon;
    }
    
}