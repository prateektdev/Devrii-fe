import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private common: CommonService, private api: ApiService) { }

  public calendarPlugins = [dayGridPlugin]; // important!
  public opened = false;
  public data = [
    { date: '05/05/2020', time: '01:30 PM', patient: 'John Doe', note: 'Test note 1' },
    { date: '06/05/2020', time: '01:31 PM', patient: 'John Snow', note: 'Test note 2' },
    { date: '07/05/2020', time: '01:32 PM', patient: 'Tony Stark', note: 'Test note 3' },
    { date: '08/05/2020', time: '01:33 PM', patient: 'Steve Rogers', note: 'Test note 4' },
    { date: '09/05/2020', time: '01:34 PM', patient: 'Bruce Wayne', note: 'Test note 5' },
    { date: '10/05/2020', time: '01:35 PM', patient: 'Clark Kent', note: 'Test note 6' },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public sidebarOptions = "providers";
  public appointment: any = {};
  public event: any = {};

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

  addAppointment(form: NgForm) {
    console.log(this.appointment);
    form.resetForm();
    alert('Appointment Saved !');
  }

  openModel(el: string) {
    this.common.toggleModel(el);
  }

  AddEvent(form: NgForm) {
    console.log(this.event);
    form.resetForm();
    alert('Event Saved !');
  }

}
