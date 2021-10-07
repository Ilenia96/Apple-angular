import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNotesComponent } from './footer-notes.component';

describe('FooterNotesComponent', () => {
  let component: FooterNotesComponent;
  let fixture: ComponentFixture<FooterNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
