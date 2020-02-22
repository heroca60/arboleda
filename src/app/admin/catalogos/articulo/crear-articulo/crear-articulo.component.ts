import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {
  public isCollapsed = true;
  private _success = new Subject<string>();

  //Variables para el mensaje de transacción
  staticAlertClosed = false;
  successMessage: string;
  messageType: string = "success";
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public nuevoRegistro() {
    this._success.next("Registro almacenado exitosamente !!!");
  }

}
