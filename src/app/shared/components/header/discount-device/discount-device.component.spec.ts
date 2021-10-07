import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountDeviceComponent } from './discount-device.component';

describe('DiscountDeviceComponent', () => {
  let component: DiscountDeviceComponent;
  let fixture: ComponentFixture<DiscountDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
