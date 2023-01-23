import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
//Cree una interfaz para los psjs


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {
   
   personajes: Personajes[]= [
    {
      nombre: 'Goku',
      edad: 1400
    },{
      nombre: 'Veggeta',
      edad: 12330
    }
   ]
   nuevo: Personajes ={
    nombre:'trunks',
    edad: 34
   }
 }