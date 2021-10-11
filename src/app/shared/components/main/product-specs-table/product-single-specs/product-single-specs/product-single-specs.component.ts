import { Component, Input, OnInit } from '@angular/core';
import { IProductMac } from 'src/app/models/Products-mac';

@Component({
  selector: 'app-product-single-specs',
  templateUrl: './product-single-specs.component.html',
  styleUrls: ['./product-single-specs.component.scss']
})
export class ProductSingleSpecsComponent implements OnInit {

  @Input () productz!: IProductMac[];

  constructor() { }

  ngOnInit(): void {
  }

}
