import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from '../data-table';
import { product } from './product-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productResource = new DataTableResource(product);
  product = [];
  productCount = 0;
  totalPrice: number = 0;
  ano = 11 + 3;

  @ViewChild(DataTable) cartTable: DataTable;

  calPrice() {
    this.product.forEach(element => {
      this.totalPrice = 0;
      this.totalPrice += Number(element.price);
    });
      }

  reloadCars(params) {
    this.productResource.query(params).then( products => this.product = products);
    this.calPrice();

  }

  deleteProduct(item) {
    this.product.splice(
      this.product.indexOf(item), 1
    );
    this.calPrice();
  }
  constructor() {
    this.productResource.count().then(count => this.productCount = count);
   }

  ngOnInit() {
  }

}
