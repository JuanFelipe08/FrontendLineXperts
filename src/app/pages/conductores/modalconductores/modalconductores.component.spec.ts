import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalconductoresComponent } from './modalconductores.component';

describe('ModalconductoresComponent', () => {
  let component: ModalconductoresComponent;
  let fixture: ComponentFixture<ModalconductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalconductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalconductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
