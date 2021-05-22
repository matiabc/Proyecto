import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {

  url="http://localhost:8666/";
  constructor(private http:HttpClient) { }

  consultarNotas():Observable<any>{
    return this.http.get(`${this.url}inicio.php`);
  }
}
