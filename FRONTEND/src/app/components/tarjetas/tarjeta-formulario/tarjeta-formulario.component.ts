import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarjeta } from 'src/app/models/Tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';

@Component({
  selector: 'app-tarjeta-formulario',
  templateUrl: './tarjeta-formulario.component.html',
  styleUrls: ['./tarjeta-formulario.component.css']
})
export class TarjetaFormularioComponent implements OnInit {
  form: FormGroup
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
  }

  guardarTarjeta() {
    const tarjeta: Tarjeta = {
      Titular: this.form.get('titular')?.value,
      Numero: this.form.get('numero')?.value,
      FechaExpiracion: this.form.get('fechaExpiracion')?.value,
      Cvv: this.form.get('cvv')?.value,
    };

    this.TarjetaService.guardarTarjeta(tarjeta).subscribe(data => {
      this.ToastrService.success('Éxito','Éxito en el registro')
      this.form.reset();
    }, err => { this.ToastrService.error('Error','Error en el registro') }
    )
  }
}
