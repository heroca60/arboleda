import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDetallecompraComponent } from './crear-detallecompra.component';

describe('CrearDetallecompraComponent', () => {
  let component: CrearDetallecompraComponent;
  let fixture: ComponentFixture<CrearDetallecompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDetallecompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDetallecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
