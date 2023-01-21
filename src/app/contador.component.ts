import {Component} from '@angular/core';  
@Component({
    selector:'app-contador',  
    styleUrls: ['./app.component.css'],
    template: `<h1>{{title}}</h1> <h3>La base es: <strong>{{base}}</strong>
        </h3>
    <button (click)="acumular(true)"> +{{base}} </button>
    <span>{{numero}}</span>
    <button (click)="acumular(false)"> -{{base}} </button>`,
})
export class ContadorComponent{
    public title: string = 'Contador App';
    public numero: number = 10;
    public base: number=5;
    acumular(valr: boolean){
     if(valr){
       this.numero+=this.base; 
     }else{
       this.numero-=this.base; 
     }
       
    }
}