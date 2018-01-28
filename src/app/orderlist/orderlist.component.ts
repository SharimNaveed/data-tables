import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from '../data-table';
import { list } from '../domain models/orderlist';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  listResource = new DataTableResource(list);
  order = [];
  @ViewChild(DataTable) cartTable: DataTable;

  reloadList(params) {
    this.listResource.query(params).then( productslist => this.order = productslist);

  }
  constructor() { }

  ngOnInit() {
  }

}
