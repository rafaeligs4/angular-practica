import { Injectable } from "@angular/core";
import { Personajes } from "../interfaces/dbz.interface";


@Injectable()
export class dbzService{
   private _personajes: Personajes[]= [
        {
          nombre: 'Goku',
          edad: 1400
        },{
          nombre: 'Veggeta',
          edad: 12330
        }
       ];
    get personajes(): Personajes[] {
        //Spread
            return [...this._personajes]; 
    }   
    constructor(){ 
      
    }
    //Abajo del constructor, los metodos 
    agregarPersonajes(pers: Personajes){
        this._personajes.push(pers); 
    }
}