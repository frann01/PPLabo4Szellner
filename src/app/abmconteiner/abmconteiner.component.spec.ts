import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMConteinerComponent } from './abmconteiner.component';

describe('ABMConteinerComponent', () => {
  let component: ABMConteinerComponent;
  let fixture: ComponentFixture<ABMConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMConteinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABMConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
