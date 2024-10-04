import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class QuadrinhosAPIService {
  readonly timeStamp: string = '1727888787';//Math.floor(Date.now() / 1000).toString();
  readonly apiKey: string= '5f4d15d2185679ed6f91d2613247eaad';
  readonly md5: string = '869db33bba509a94e15594f45ba5aef4';

  constructor(
    private http:HttpClient
  ) 
  {}

  baseUrl = "https://gateway.marvel.com:443/v1/public/comics?"

  obterQuadrinhos(): Observable<any>{
    return this.http.get(this.baseUrl + `ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}&limit=36` )
  }

  obterQuadrinhosPorPersonagem(personagemId: string):Observable<any>
  {
    const quadrinhosPorPersonagemUrl = `https://gateway.marvel.com:443/v1/public/characters/${personagemId}/comics?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}`;
    return this.http.get(quadrinhosPorPersonagemUrl);
  }
 
}