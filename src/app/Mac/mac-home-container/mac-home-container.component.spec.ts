import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacHomeContainerComponent } from './mac-home-container.component';

describe('MacHomeContainerComponent', () => {
  let component: MacHomeContainerComponent;
  let fixture: ComponentFixture<MacHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacHomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
