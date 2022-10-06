import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaConteinerComponent } from './alta-conteiner.component';

describe('AltaConteinerComponent', () => {
  let component: AltaConteinerComponent;
  let fixture: ComponentFixture<AltaConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaConteinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
