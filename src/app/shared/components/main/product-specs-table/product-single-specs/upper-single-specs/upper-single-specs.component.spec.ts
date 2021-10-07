import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSingleSpecsComponent } from './upper-single-specs.component';

describe('UpperSingleSpecsComponent', () => {
  let component: UpperSingleSpecsComponent;
  let fixture: ComponentFixture<UpperSingleSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperSingleSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperSingleSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
