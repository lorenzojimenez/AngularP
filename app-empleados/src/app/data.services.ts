import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){
        
    }

    cargarEmpleados(){
        return this.httpClient.get('https://mis-clientes-62c1f-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-62c1f-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(

            Response=>console.log("Se han guardado los empleados: " + Response), 

            error=> console.log("Error:" + error),
            
        );
          
    }

    actualizarEmpleados(indice:number, empleado:Empleado){
        let url='https://mis-clientes-62c1f-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url,empleado).subscribe(

            Response=>console.log("Se han modificado los empleados: " + Response), 

            error=> console.log("Error:" + error),
        );
    }



    eliminarEmpleado(indice:number){
        let url='https://mis-clientes-62c1f-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(

            Response=>console.log("Se ha eliminado el empleado: " + Response), 

            error=> console.log("Error:" + error),
        );
    }
}