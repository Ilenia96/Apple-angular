import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeCardContainerComponent } from './full-size-card.component';

describe('FullSizeCardContainerComponent', () => {
  let component: FullSizeCardContainerComponent;
  let fixture: ComponentFixture<FullSizeCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSizeCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSizeCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
