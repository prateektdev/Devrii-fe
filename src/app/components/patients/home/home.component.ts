import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonService } from '../../../service/common.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private common: CommonService, private api: ApiService, private router: Router) { }

  public calendarPlugins = [dayGridPlugin]; // important!
  public opened = false;
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
  public sidebarOptions = "patients";
  // public sidebarOptions = "providers";

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getUserProfile();
    // this.getLogo();
  }

  getUserProfile() {
    this.api.getUserProfileOptions().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getLogo() {
    this.api.getbussinessLogo().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
