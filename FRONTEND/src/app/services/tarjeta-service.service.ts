import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { Tarjeta } from '../models/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  base = 'https://localhost:7081/'
  rute = 'api/Tarjetas/'
  tarjetas:any[] = [];
  private actualizarForm = new BehaviorSubject<Tarjeta>({} as any)
  constructor(private http:HttpClient) { 

  }

  guardarTarjeta(tarjeta:Tarjeta):Observable<Tarjeta>{
   return this.http.post<Tarjeta>(this.base+this.rute,tarjeta)
  }

  obtenerTarjetas(){
    this.http.get(this.base+this.rute).toPromise()
    .then(tarjetas=>{
      this.tarjetas = tarjetas as Tarjeta[]   
    })
  }

  eliminarTarjeta(id:Number):Observable<Tarjeta>{
    return this.http.delete<Tarjeta>(this.base+this.rute+id)
  }

  actualizarTarjeta(id:number,tarjeta: Tarjeta):Observable<Tarjeta>{
    return this.http.put<Tarjeta>(this.base+this.rute+id,tarjeta);
  }

  actualizarTarjetaFormulario(tarjeta: Tarjeta){
    this.actualizarForm.next(tarjeta)
  }
  obtenerTarjetaFormulario():Observable<Tarjeta>{
    return this.actualizarForm.asObservable()
  }
}
