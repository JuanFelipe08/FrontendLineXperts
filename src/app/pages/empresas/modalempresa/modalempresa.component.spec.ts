import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalempresaComponent } from './modalempresa.component';

describe('ModalempresaComponent', () => {
  let component: ModalempresaComponent;
  let fixture: ComponentFixture<ModalempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
