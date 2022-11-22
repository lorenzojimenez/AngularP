
import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
@Output() CaracteristicasEmpleados = new EventEmitter<string>();


agregarCaracteristicas(value: string){
//  this.miServicio.muestraMensaje(value);
  this.CaracteristicasEmpleados.emit(value);

}

//constructor(private miServicio:ServicioEmpleadosService){}

}

