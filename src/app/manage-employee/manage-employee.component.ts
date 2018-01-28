import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { DataTable, DataTableResource } from '../data-table';
import { list } from '../domain models/employeeList';


@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  listResource = new DataTableResource(list);
  list = [];
  @ViewChild(DataTable) cartTable: DataTable;

  reloadList(params) {
    this.listResource.query(params).then( productslist => this.list = productslist);

  }
  constructor() { }

  ngOnInit() {
  }

}
