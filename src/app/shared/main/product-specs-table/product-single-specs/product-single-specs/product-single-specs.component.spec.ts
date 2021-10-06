import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleSpecsComponent } from './product-single-specs.component';

describe('ProductSingleSpecsComponent', () => {
  let component: ProductSingleSpecsComponent;
  let fixture: ComponentFixture<ProductSingleSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSingleSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSingleSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
