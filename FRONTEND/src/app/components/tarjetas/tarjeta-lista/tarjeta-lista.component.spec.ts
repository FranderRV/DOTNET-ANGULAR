import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaListaComponent } from './tarjeta-lista.component';

describe('TarjetaListaComponent', () => {
  let component: TarjetaListaComponent;
  let fixture: ComponentFixture<TarjetaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
