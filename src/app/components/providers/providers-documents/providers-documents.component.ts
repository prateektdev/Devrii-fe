import { Component, OnInit, OnDestroy } from "@angular/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonService } from 'src/app/service/common.service';
import { ApiService } from 'src/app/service/api.service';

declare const $: any;

@Component({
  selector: "app-providers-documents",
  templateUrl: "./providers-documents.component.html",
  styleUrls: ["./providers-documents.component.css"],
})
export class ProvidersDocumentsComponent implements OnInit, OnDestroy {
  constructor(private common: CommonService, private api: ApiService) { }

  public opened = false;

  public data = [
    { checked: false, date: '04/05/2020', patient: 'John Doe', subject: 'Test subject', note: 'Test note 1', comment: false, actionStatus: 'Forward' },
    { checked: false, date: '05/05/2020', patient: 'Tony Stark', subject: 'Test subject', note: 'Test note 1', comment: false, actionStatus: 'Favourite' },
    { checked: false, date: '06/05/2020', patient: 'Bruce Wayne', subject: 'Test subject', note: 'Test note 1', comment: true, actionStatus: 'Forward' },
    { checked: false, date: '07/05/2020', patient: 'Steve Rogers', subject: 'Test subject', note: 'Test note 1', comment: false, actionStatus: 'Favourite' },
    { checked: false, date: '08/05/2020', patient: 'Clark Kent', subject: 'Test subject', note: 'Test note 1', comment: false, actionStatus: 'Action' },
  ];

  public title = 'angulardatatables';
  public dtOptions: DataTables.Settings = {};
  public sidebarOptions = "providers";
  public docName = "";

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      processing: true
    };
  }

  changeStatus(index) {
    if (this.data[index].actionStatus === 'Forward') {
      this.data[index].actionStatus = 'Favourite';
    } else {
      this.data[index].actionStatus = 'Forward';
    }
  }

  changeName(name: string) {
    this.docName = name
  }

  openReportModal() {
    console.log('report modal');
    $('#reportModal').modal('show');
  }

  ngOnDestroy() {
    console.log('destroy')
  }
}
