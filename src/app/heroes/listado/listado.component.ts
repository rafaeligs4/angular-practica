import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    public superheroes = ['superman',
'spiderman','Ironman','Hulk','Wolverine'];
 public heroeBorrado : string= '';


 borrarHeroe() :void{
    this.heroeBorrado=this.superheroes.shift() || '';
  }

}
