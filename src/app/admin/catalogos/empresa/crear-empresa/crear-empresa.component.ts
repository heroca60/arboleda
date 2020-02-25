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
  messageType: string = "success";

  //Datos del formulario
  datos: any;
  constructor(
    //inyectando formulario reactivo para validación y captura de datos
    private formBuilder: FormBuilder,
    //inyectando apiREST
    private apiRest: HotelService
  ) {
    this.datos = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      representante: ['', Validators.required],
      estado: ['1']
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
    console.log(this.datos.value);
    if (this.datos.valid) {
      console.log(this.datos.value);
      this.apiRest.postElemento(this.datos.value).subscribe(res => {
        console.log('Éxito!!');
      })
      this._success.next("Registro almacenado exitosamente !!!");
    }
  }
}
