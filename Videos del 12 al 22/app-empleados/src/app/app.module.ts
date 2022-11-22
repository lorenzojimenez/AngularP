import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHojiCComponent } from './empleado-hoji-c/empleado-hoji-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesSomosComponentComponent } from './quienes-somos-component/quienes-somos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHojiCComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesSomosComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
