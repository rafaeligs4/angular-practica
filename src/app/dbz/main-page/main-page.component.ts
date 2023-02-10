import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';
//Cree una interfaz para los psjs


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {
   
   personaje: Personajes[]= [];
   nuevo: Personajes ={
    nombre:'trunks',
    edad: 34
   }


  //  agregarNuevoPersonaje(argumento: Personajes){
    
  //   // this.personaje.push(argumento);
  //    console.log(argumento);
  //  }
  // //  get personajes():Personajes[]{
  //     return this.dbzSer.personajes;
  //  }
  //  constructor(
  //   private dbzSer : dbzService 
  //  ){
  //  // this.personaje = this.dbzSer.personajes;
  //  }
   
 }
