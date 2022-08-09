import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltransportadorasComponent } from './modaltransportadoras.component';

describe('ModaltransportadorasComponent', () => {
  let component: ModaltransportadorasComponent;
  let fixture: ComponentFixture<ModaltransportadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaltransportadorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltransportadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
