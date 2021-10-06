import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFullSizeCardComponent } from './single-full-size-card.component';

describe('SingleFullSizeCardComponent', () => {
  let component: SingleFullSizeCardComponent;
  let fixture: ComponentFixture<SingleFullSizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFullSizeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFullSizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
