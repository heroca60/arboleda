import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Hotel } from '../class/hotel';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  //apiURL = 'https://jsonplaceholder.typicode.com/posts/1/';


  constructor(
    private _http: HttpClient
  ) { }

  /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //***************GET**************************
  getElementos(): Observable<any> {
    return this._http.get(environment.apiRest + 'hotels');
  }
  //********************************************


  //***************POST*************************
  postElemento(data: Hotel): Observable<any> {    
    return this._http.post<Hotel>(environment.apiRest + 'hotels', JSON.stringify(data), this.httpOptions)
      .pipe
      (
        retry(1),
        catchError(this.handleError)
      )
  }
  //********************************************

  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
