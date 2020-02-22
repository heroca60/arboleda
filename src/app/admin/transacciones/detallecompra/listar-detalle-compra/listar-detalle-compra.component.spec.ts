import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetalleCompraComponent } from './listar-detalle-compra.component';

describe('ListarDetalleCompraComponent', () => {
  let component: ListarDetalleCompraComponent;
  let fixture: ComponentFixture<ListarDetalleCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDetalleCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDetalleCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
