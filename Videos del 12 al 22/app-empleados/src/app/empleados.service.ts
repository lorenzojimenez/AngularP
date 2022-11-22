import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }


    empleados:Empleado[]=[

        new Empleado("Juan","De la Torre","Presidente",7500),
        new Empleado("Amaya","Chuc","Jefa",8500),
        new Empleado("Ana","Dedez","Directora",3500),
        new Empleado("María","karma","Administradora",5500),
    
      ];

      agregarEmpleadoService(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
        empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);
      }
}