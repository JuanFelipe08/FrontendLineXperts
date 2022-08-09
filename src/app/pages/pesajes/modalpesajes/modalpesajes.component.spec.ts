import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpesajesComponent } from './modalpesajes.component';

describe('ModalpesajesComponent', () => {
  let component: ModalpesajesComponent;
  let fixture: ComponentFixture<ModalpesajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalpesajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalpesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
