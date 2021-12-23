import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Tarjeta } from 'src/app/models/Tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';

@Component({
  selector: 'app-tarjeta-formulario',
  templateUrl: './tarjeta-formulario.component.html',
  styleUrls: ['./tarjeta-formulario.component.css']
})
export class TarjetaFormularioComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription: Subscription = new Subscription();
  tarjeta: any;
  id = 0
  constructor(private FormBuilder: FormBuilder, private TarjetaService: TarjetaService, private ToastrService: ToastrService) {
    this.form = this.FormBuilder.group({
      id: 0,
      titular: ['', Validators.required],
      numero: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    this.suscription = this.TarjetaService.obtenerTarjetaFormulario().subscribe(tarjeta => {
      this.tarjeta = tarjeta 
      this.id = this.tarjeta.id;
      this.form.patchValue({
        titular: this.tarjeta.titular,
        numero: this.tarjeta.numero,
        fechaExpiracion: this.tarjeta.fechaExpiracion,
        cvv: this.tarjeta.cvv,
      })
    })
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }

  accionFormulario(){
    if(this.id===0){
      console.log('paso agregar');
      
      this.guardarTarjeta()
    }else{
      this.editarTarjeta()
    }
  }  

  editarTarjeta() {
    const tarjeta: Tarjeta = {
      Id: this.tarjeta.id,
      Titular: this.form.get('titular')?.value,
      Numero: this.form.get('numero')?.value,
      FechaExpiracion: this.form.get('fechaExpiracion')?.value,
      Cvv: this.form.get('cvv')?.value,
    };

    this.TarjetaService.actualizarTarjeta(this.id,tarjeta).subscribe(data => {
      this.ToastrService.success('Éxito', 'Éxito en la actualización')
      this.TarjetaService.obtenerTarjetas()
      this.form.reset();
    }, err => {console.log(err); this.ToastrService.error('Error', 'Error en la actualización') }
    )
  }

  guardarTarjeta() {
    const tarjeta: Tarjeta = {
      Titular: this.form.get('titular')?.value,
      Numero: this.form.get('numero')?.value,
      FechaExpiracion: this.form.get('fechaExpiracion')?.value,
      Cvv: this.form.get('cvv')?.value,
    };

    this.TarjetaService.guardarTarjeta(tarjeta).subscribe(data => {
      this.ToastrService.success('Éxito', 'Éxito en el registro')
      this.TarjetaService.obtenerTarjetas()
      this.form.reset();
      this.id = 0
    }, err => { this.ToastrService.error('Error', 'Error en el registro') }
    )
  }
}
