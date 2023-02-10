import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
 
})
export class AgregarComponent {


  @Input()  nuevo: Personajes = {
    nombre :'',
    edad : 0
   };
   //Output sirv para mandar datos al componente Padre 
   //En vez de mandar el array de personajes se hace estos
   //Para no tener tantas peticiones
 //  @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();

   agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
   this.dbzS.agregarPersonajes(this.nuevo);
   //this.onNuevoPersonaje.emit(this.nuevo);
     this.nuevo={
      nombre :'',
      edad : 0
     }
    //   agregarNombre(event: any){
//       console.log(event.target.value);
   }
   constructor(
    private dbzS: dbzService){} 
}
