import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer-notes',
  templateUrl: './footer-notes.component.html',
  styleUrls: ['./footer-notes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterNotesComponent implements OnInit {

  @Input() notesArray: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
