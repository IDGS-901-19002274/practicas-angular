import { Component } from '@angular/core';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styleUrls: ['./distancias.component.css']
})
export class DistanciasComponent {
  x1! : number
  y1! : number
  x2! : number
  y2! : number
  resultado! : string

  calcular() : void{
    let res = Math.sqrt(Math.pow(this.x2-this.x1, 2) + Math.pow(this.y2-this.y1, 2))
    this.resultado = 'La distancia entre los puntos (' + this.x1 + ', ' + this.y1 + ') y (' + this.x2 + ', ' + this.y2 + ') es de: ' + res.toFixed(2)
  }
}
