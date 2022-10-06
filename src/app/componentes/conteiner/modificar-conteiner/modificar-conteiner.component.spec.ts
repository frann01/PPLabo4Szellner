import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarConteinerComponent } from './modificar-conteiner.component';

describe('ModificarConteinerComponent', () => {
  let component: ModificarConteinerComponent;
  let fixture: ComponentFixture<ModificarConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarConteinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
