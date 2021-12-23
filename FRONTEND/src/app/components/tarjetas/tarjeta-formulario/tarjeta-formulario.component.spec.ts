import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaFormularioComponent } from './tarjeta-formulario.component';

describe('TarjetaFormularioComponent', () => {
  let component: TarjetaFormularioComponent;
  let fixture: ComponentFixture<TarjetaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
