import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {
 @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter;

  @Input()  nuevo: Personajes = {
    nombre :'',
    edad : 0
   };
   agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
     this.nuevo={
      nombre :'',
      edad : 0
     }
    //   agregarNombre(event: any){
//       console.log(event.target.value);
   }
}
