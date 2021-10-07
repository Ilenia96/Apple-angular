import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeviceHeaderComponent } from './single-device-header.component';

describe('SingleDeviceHeaderComponent', () => {
  let component: SingleDeviceHeaderComponent;
  let fixture: ComponentFixture<SingleDeviceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDeviceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeviceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
