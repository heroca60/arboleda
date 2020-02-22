import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-detallecompra',
  templateUrl: './crear-detallecompra.component.html',
  styleUrls: ['./crear-detallecompra.component.css']
})
export class CrearDetallecompraComponent implements OnInit {
  public isCollapsed = false;
  private _success = new Subject<string>();

  model: NgbDateStruct;
  today = this.calendar.getToday();

  staticAlertClosed = false;
  successMessage: string;
  messageType: string = "success";

  constructor(private calendar: NgbCalendar) { }

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
