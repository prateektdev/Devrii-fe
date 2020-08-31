import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public data = [
    { date: '05/05/2020', from: 'Dr.K', subject: 'Test Subject 1', status: true, sigin: false },
    { date: '06/05/2020', from: 'Dr.A', subject: 'Test Subject 2', status: true, sigin: false },
    { date: '07/05/2020', from: 'Dr.B', subject: 'Test Subject 3', status: true, sigin: false },
    { date: '08/05/2020', from: 'Dr.C', subject: 'Test Subject 4', status: true, sigin: false },
    { date: '09/05/2020', from: 'Dr.D', subject: 'Test Subject 5', status: true, sigin: false },
    { date: '10/05/2020', from: 'Dr.E', subject: 'Test Subject 6', status: true, sigin: false },
    { date: '11/05/2020', from: 'Dr.F', subject: 'Test Subject 7', status: true, sigin: false },
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

  handleSignin(row: any) {
    console.log('sign in');
    row.sigin = !row.sigin;
  }

}
