import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
 
})
export class AgregarComponent {
  @Input() personajes :Personajes[] = [];
   
  @Input()  nuevo: Personajes = {
    nombre :'',
    edad : 0
   };
   agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.personajes.push(this.nuevo);
     this.nuevo={
      nombre :'',
      edad : 0
     }
    //   agregarNombre(event: any){
//       console.log(event.target.value);
   } 
}
