import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFraisComponent } from './validation-frais.component';

describe('ValidationFraisComponent', () => {
  let component: ValidationFraisComponent;
  let fixture: ComponentFixture<ValidationFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationFraisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
