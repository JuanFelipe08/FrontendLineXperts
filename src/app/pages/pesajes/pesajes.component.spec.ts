import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesajesComponent } from './pesajes.component';

describe('PesajesComponent', () => {
  let component: PesajesComponent;
  let fixture: ComponentFixture<PesajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
