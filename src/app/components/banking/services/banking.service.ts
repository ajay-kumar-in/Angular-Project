import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  apiUrl = "https://vast-shore-74260.herokuapp.com/banks?city=";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getBankDetails(city: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${city}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>())
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // private handleResponse(res) {
  //   if (res.error) {
  //     this.toastr.warning(`Failed: ${res.message}`);
  //   } else {
  //     this.toastr.success(`Success:${res.message}`);
  //   }
  //   return res;
  // }


}
