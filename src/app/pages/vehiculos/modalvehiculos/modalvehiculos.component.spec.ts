import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalvehiculosComponent } from './modalvehiculos.component';

describe('ModalvehiculosComponent', () => {
  let component: ModalvehiculosComponent;
  let fixture: ComponentFixture<ModalvehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalvehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalvehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
