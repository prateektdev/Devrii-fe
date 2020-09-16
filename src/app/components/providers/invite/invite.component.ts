import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NgForm } from '@angular/forms';

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
    { date: '05/05/2020', to: 'Berry Alen', subject: 'Provider', status: true },
    { date: '06/05/2020', to: 'Bruce Banner', subject: 'Lab', status: true },
    { date: '07/05/2020', to: 'Bruce Wayne', subject: 'Patient', status: true },
    { date: '08/05/2020', to: 'Clark Kent', subject: 'Lab', status: true },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public sidebarOptions = "providers";
  public invite: any = {};

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

  createInvite(form: NgForm) {
    console.log(this.invite);
    form.resetForm();
    alert('Event Saved !');
  }

}
