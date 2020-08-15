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
    { date: '05/05/2020', from: 'Dr.K', subject: 'Test Subject 1' },
    { date: '06/05/2020', from: 'Dr.A', subject: 'Test Subject 2' },
    { date: '07/05/2020', from: 'Dr.B', subject: 'Test Subject 3' },
    { date: '08/05/2020', from: 'Dr.C', subject: 'Test Subject 4' },
    { date: '09/05/2020', from: 'Dr.D', subject: 'Test Subject 5' },
    { date: '10/05/2020', from: 'Dr.E', subject: 'Test Subject 6' },
    { date: '11/05/2020', from: 'Dr.F', subject: 'Test Subject 7' },
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

}
