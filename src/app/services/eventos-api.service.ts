import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EventosAPIService {
  readonly timeStamp: string = '1727888787';//Math.floor(Date.now() / 1000).toString();
  readonly apiKey: string= '5f4d15d2185679ed6f91d2613247eaad';
  readonly md5: string = '869db33bba509a94e15594f45ba5aef4';

  constructor(
    private http:HttpClient,
    private snackBar : MatSnackBar
  ) 
  {}

  baseUrl = "https://gateway.marvel.com:443/v1/public/events?"

  obterEventos(): Observable<any> {
    return this.http.get(this.baseUrl + `ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}&limit=16` )
  }

  obterEventoPorNome(nome: string): Observable<any> {
    return this.http.get(this.baseUrl + `name=${nome}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}` )
  }

}