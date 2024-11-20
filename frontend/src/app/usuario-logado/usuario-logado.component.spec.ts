import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLogadoComponent } from './usuario-logado.component';

describe('UsuarioLogadoComponent', () => {
  let component: UsuarioLogadoComponent;
  let fixture: ComponentFixture<UsuarioLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioLogadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
