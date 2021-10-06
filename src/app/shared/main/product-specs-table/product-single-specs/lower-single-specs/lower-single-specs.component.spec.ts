import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerSingleSpecsComponent } from './lower-single-specs.component';

describe('LowerSingleSpecsComponent', () => {
  let component: LowerSingleSpecsComponent;
  let fixture: ComponentFixture<LowerSingleSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerSingleSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerSingleSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
