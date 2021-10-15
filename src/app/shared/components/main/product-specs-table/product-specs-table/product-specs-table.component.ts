import { Component, Input, OnInit } from '@angular/core';
import { IProductMac } from 'src/app/models/Products-mac';

@Component({
  selector: 'app-product-specs-table',
  templateUrl: './product-specs-table.component.html',
  styleUrls: ['./product-specs-table.component.scss']
})
export class ProductSpecsTableComponent implements OnInit {

@Input () productx!: IProductMac[];

  constructor() { }

  ngOnInit(): void {
  }

}
