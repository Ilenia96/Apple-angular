import { Component, OnInit, Input } from '@angular/core';
import { IProductMac } from 'src/app/models/Products-mac';

@Component({
  selector: 'app-lower-single-specs',
  templateUrl: './lower-single-specs.component.html',
  styleUrls: ['./lower-single-specs.component.scss']
})
export class LowerSingleSpecsComponent implements OnInit {

  @Input () producta!: IProductMac;

  constructor() { }

  ngOnInit(): void {

  }

}
