import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { DataTable, DataTableResource } from '../data-table';
import { list } from '../domain models/orderlist';


@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

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
