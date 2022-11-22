import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

setEmpleados(misEmpleados:Empleado[]){
  this.empleados=misEmpleados;
}
    obtenerEmpleados(){

      return this.dataService.cargarEmpleados();
    }

    empleados:Empleado[]=[];
/*
        new Empleado("Juan","De la Torre","Presidente",7500),
        new Empleado("Amaya","Chuc","Jefa",8500),
        new Empleado("Ana","Dedez","Directora",3500),
        new Empleado("María","karma","Administradora",5500),
    
      ];**/

      agregarEmpleadoService(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + 
        empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);
      }

      encontrarEmpleado(indice:number){
          let empleado:Empleado=this.empleados[indice];

          return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleados(indice, empleado);
      }
      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);

        this.dataService.eliminarEmpleado(indice);

        this.dataService.guardarEmpleados(this.empleados);
      }
}