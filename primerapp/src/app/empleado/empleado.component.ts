import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
 // template: '<p>Aquí iría un empleado</p>',
  styleUrls: ['./empleado.component.css']
 //styles: ['p{background-color:brown;}']
})
export class EmpleadoComponent {

  nombre="Juan";

  apellido="Díaz";

  edad=18;

 empresa="Google";



 /* getEdad(){
    return this.edad;
  }**/

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistra="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
   // alert ("El usuario se acaba de registrar");
  // this.textoDeRegistra="El usuario se acaba de registrar";}
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistra="El usuario se acaba de registrar";
  }else{
    this.textoDeRegistra="No hay nadie registrado";
  }
  }
}
