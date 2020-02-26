import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

import { Country } from '../../../../interface/country';
import { CountryService } from '../../../../service/country.service';
import { NgbdSortableHeader, SortEvent } from '../../../../datos/sortable.directive';
import { ConfiguracionService } from 'src/app/service/configuracion.service';
import { HotelService } from 'src/app/shared/services/hotel.service';


@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css'],
  providers: [CountryService, DecimalPipe, NgbProgressbarConfig]
})
export class ListarEmpresaComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  //referencias al tipo de icono utilizado para el CLAE
  ic: String
  il: String
  ia: String
  ie: String


  constructor(
    public service: CountryService,
    config: NgbProgressbarConfig,
    private _configuracion: ConfiguracionService,
    private _service: HotelService
  ) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;

    //ProgressBar
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';

    this.ic = _configuracion.iconoCrear
    this.il = _configuracion.iconoLeer
    this.ia = _configuracion.iconoActualizar
    this.ie = _configuracion.iconoEliminar

  }

  ngOnInit() {
    this._service.getElementos()
    .subscribe
    (
      data => {
        console.log(data);
      }
    )
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
