import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../../../../shared/services/hotel.service';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {
  public isCollapsed = true;
  private _success = new Subject<string>();

  //Variables para el mensaje de transacción
  staticAlertClosed = false;
  successMessage: string;
  messageType: string;

  //Datos del formulario
  datos: any;
  constructor(
    //inyectando formulario reactivo para validación y captura de datos
    private formBuilder: FormBuilder,
    //inyectando apiREST
    private _apiRest: HotelService
  ) {
    this.datos = this.formBuilder.group({
      nombrehotel: ['', Validators.required],
      direccionhotel: ['', Validators.required],
      representantehotel: ['', Validators.required],
      estadohotel: [1]
    })
  }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public nuevoRegistro() {
    if (this.datos.valid) {
      this._apiRest.postElemento(this.datos.value)
        .subscribe
        (
          result => {
            console.log(result.code)
            if (result.code == null) {
              this.messageType = "success";
              this._success.next("Registro almacenado exitosamente !!!");
            } else {
              this.messageType = "danger";
              this._success.next("Ocurrió un error: " + result);
            }
          })
    } else {
      this.messageType = "warning";
      this._success.next("Complete los campos obligatorios");
    }
  }
}
