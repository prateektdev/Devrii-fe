import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

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
  public opened = false;
  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
