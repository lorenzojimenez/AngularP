import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hoji-c',
  templateUrl: './empleado-hoji-c.component.html',
  styleUrls: ['./empleado-hoji-c.component.css']
})
export class EmpleadoHojiCComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;
  

  arrayCaracteristica = [''];

  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristica.push(nuevaCaracteristica);
  }
}