import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonService } from 'src/app/service/common.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor(private common: CommonService, private api: ApiService) { }

  public calendarPlugins = [dayGridPlugin]; // important!
  public opened = false;
  public data = [
    { date: '05/05/2020', from: 'John Doe', subject: 'Test note 1', state: true },
    { date: '05/05/2020', from: 'Tony Stark', subject: 'Test note 2', state: true },
    { date: '05/05/2020', from: 'Clark kent', subject: 'Test note 3', state: true },
    { date: '05/05/2020', from: 'Steve Rogers', subject: 'Test note 4', state: true },
    { date: '05/05/2020', from: 'Bruce Banner', subject: 'Test note 5', state: true },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public sidebarOptions = "providers";

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      processing: true
    };
  }

  changeState(row: any) {
    row.state = !row.state;
    console.log(row);
  }

  openModel(el: string) {
    this.common.toggleModel(el);
  }

}
