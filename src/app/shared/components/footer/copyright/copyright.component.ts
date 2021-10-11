import { ILink } from './../footer-container/ILink';
import { Component, OnInit } from '@angular/core';
import { Privacy } from './Privacy';


@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  privacylinks: ILink[] = Privacy;

  constructor() { }

  ngOnInit(): void {
  }

}
