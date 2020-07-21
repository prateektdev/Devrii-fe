import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonService } from 'src/app/service/common.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-rx',
  templateUrl: './new-rx.component.html',
  styleUrls: ['./new-rx.component.css']
})
export class NewRxComponent implements OnInit {

  constructor(private common: CommonService, private api: ApiService) { }

  public calendarPlugins = [dayGridPlugin]; // important!
  public opened = false;
  public data = [
    { date: '05/05/2020', from: 'Dr A.', subject: 'Crown', patient: 'John Snow', dueDate: '06/05/2020' },
    { date: '05/05/2020', from: 'Dr T.', subject: 'Implant', patient: 'John Snow', dueDate: '06/05/2020' },
  ];
  public message = [
    { date: '05/05/2020', time: '01:30 PM', patient: 'John Doe', note: 'Test note 1' },
    { date: '06/05/2020', time: '01:31 PM', patient: 'John Snow', note: 'Test note 2' },
    { date: '07/05/2020', time: '01:32 PM', patient: 'Tony Stark', note: 'Test note 3' },
    { date: '08/05/2020', time: '01:33 PM', patient: 'Steve Rogers', note: 'Test note 4' },
    { date: '09/05/2020', time: '01:34 PM', patient: 'Bruce Wayne', note: 'Test note 5' },
    { date: '10/05/2020', time: '01:35 PM', patient: 'Clark Kent', note: 'Test note 6' },
    { date: '10/05/2020', time: '01:36 PM', patient: 'Client Barten', note: 'Test note 7' },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public sidebarOptions = "labs";

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      processing: true
    };
  }

}
