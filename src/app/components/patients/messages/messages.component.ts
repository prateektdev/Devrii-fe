import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  public data = [
    { date: '05/05/2020', from: 'Dr.K', subject: 'Test Subject 1', status: true },
    { date: '06/05/2020', from: 'Dr.A', subject: 'Test Subject 2', status: true },
    { date: '07/05/2020', from: 'Dr.B', subject: 'Test Subject 3', status: true },
    { date: '08/05/2020', from: 'Dr.C', subject: 'Test Subject 4', status: true },
    { date: '09/05/2020', from: 'Dr.D', subject: 'Test Subject 5', status: true },
    { date: '10/05/2020', from: 'Dr.E', subject: 'Test Subject 6', status: true },
    { date: '11/05/2020', from: 'Dr.F', subject: 'Test Subject 7', status: true },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public opened = false;

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  handleApprove(row: any) {
    console.log(row);
    row.status = !row.status;
  }

}
