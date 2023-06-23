import { Component } from '@angular/core';
import { colors } from './colores';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  for_Colors = colors

  resultado = ''
  banda1! : string
  banda2! : string
  multi! : number

  calcular(){
    let result = parseInt(this.banda1 + this.banda2) * this.multi

    this.resultado = 'La resistencia equivale a ' + result + ' ohms.'
  }
}
