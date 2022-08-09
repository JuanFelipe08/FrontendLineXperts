import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalproductosComponent } from './modalproductos.component';

describe('ModalproductosComponent', () => {
  let component: ModalproductosComponent;
  let fixture: ComponentFixture<ModalproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
