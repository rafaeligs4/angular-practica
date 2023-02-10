import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //Input es para agregar los datos externos
 // @Input() personajes : Personajes[]=[];
 get personajes(){
  return this.dbzS.personajes;
}
constructor(
  private dbzS: dbzService
){}
}
