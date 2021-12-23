import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../models/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  base = 'https://localhost:7081/'
  rute = 'api/Tarjetas/'
  constructor(private hhtp:HttpClient) { 

  }

  guardarTarjeta(tarjeta:Tarjeta):Observable<Tarjeta>{
   return this.hhtp.post<Tarjeta>(this.base+this.rute,tarjeta)
  }
}
