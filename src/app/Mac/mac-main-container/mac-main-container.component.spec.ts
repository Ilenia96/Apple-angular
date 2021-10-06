import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacMainContainerComponent } from './mac-main-container.component';

describe('MacMainContainerComponent', () => {
  let component: MacMainContainerComponent;
  let fixture: ComponentFixture<MacMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacMainContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
