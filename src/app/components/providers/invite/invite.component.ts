import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  constructor() { }

  public calendarPlugins = [dayGridPlugin]; // important!
  public opened = false;
  public data = [
    { date: '05/05/2020', to: 'Berry Alen', subject: 'Provider' },
    { date: '06/05/2020', to: 'Bruce Banner', subject: 'Lab' },
    { date: '07/05/2020', to: 'Bruce Wayne', subject: 'Patient' },
    { date: '08/05/2020', to: 'Clark Kent', subject: 'Lab' },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public sidebarOptions = "providers";

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
