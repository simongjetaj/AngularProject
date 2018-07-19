import { Component, OnInit } from '@angular/core';
import {IOrder} from './order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  infoSelected: string = '';
  pageTitle: string = 'Orders List';
  orders: IOrder[] = [
    {
      "id": 1,
      "total": "$500.00",
      "date": "March 19, 2018"
    },
    {
      "id": 2,
      "total": "$600.00",
      "date": "March 24, 2017"
    }];
  constructor() { }

  ngOnInit() {
  }
  setInfo(order): void {
    this.infoSelected = "Info for this order:"+order.id+"-"
    + order.total +"-"+ order.date;
  }
}
