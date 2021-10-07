import { Component, Input, OnInit } from '@angular/core';
import { IProductMac } from 'src/app/models/Products-mac';

@Component({
  selector: 'app-upper-single-specs',
  templateUrl: './upper-single-specs.component.html',
  styleUrls: ['./upper-single-specs.component.scss']
})
export class UpperSingleSpecsComponent implements OnInit {

  @Input () product!: IProductMac;

  constructor() { }

  ngOnInit(): void {
  }

}
