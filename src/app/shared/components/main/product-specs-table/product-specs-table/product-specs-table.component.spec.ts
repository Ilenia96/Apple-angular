import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecsTableComponent } from './product-specs-table.component';

describe('ProductSpecsTableComponent', () => {
  let component: ProductSpecsTableComponent;
  let fixture: ComponentFixture<ProductSpecsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpecsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
