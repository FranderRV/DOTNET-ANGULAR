import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';
import { ToastrService } from 'ngx-toastr';
import { Tarjeta } from 'src/app/models/Tarjeta';

@Component({
  selector: 'app-tarjeta-lista',
  templateUrl: './tarjeta-lista.component.html',
  styleUrls: ['./tarjeta-lista.component.css']
})
export class TarjetaListaComponent implements OnInit {

  constructor(public TarjetaService: TarjetaService,private ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.TarjetaService.obtenerTarjetas()
  }

  eliminarTarjeta(id:number){
    this.TarjetaService.eliminarTarjeta(id).subscribe(data=>{
      this.ToastrService.info('Eliminado','Registro eliminado')
      this.TarjetaService.obtenerTarjetas()
    },err=>{
      this.ToastrService.warning('Error','Error al eliminar')})
  }

  editarTarjeta(tarjeta:Tarjeta){
    this.TarjetaService.actualizarTarjetaFormulario(tarjeta)
  }
}
