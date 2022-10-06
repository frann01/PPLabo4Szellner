import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoConteinerComponent } from './listado-conteiner.component';

describe('ListadoConteinerComponent', () => {
  let component: ListadoConteinerComponent;
  let fixture: ComponentFixture<ListadoConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoConteinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
