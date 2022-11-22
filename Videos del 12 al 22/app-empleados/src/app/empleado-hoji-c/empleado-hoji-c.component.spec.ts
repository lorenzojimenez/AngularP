import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHojiCComponent } from './empleado-hoji-c.component';

describe('EmpleadoHojiCComponent', () => {
  let component: EmpleadoHojiCComponent;
  let fixture: ComponentFixture<EmpleadoHojiCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoHojiCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHojiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
