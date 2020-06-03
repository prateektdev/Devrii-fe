import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  @Input() routeType: string;

  public links = [
    { text: "Home", link: ['/patient/home'], class: "fa-home", type: "patients" },
    { text: "Documents", link: ['/patient/documents'], class: "fa-file-text", type: "patients" },
    { text: "Upload Center", link: ['/patient/upload-center'], class: "fa-cloud-upload", type: "patients" },
    { text: "Messages", link: ['/patient/messages'], class: "fa-envelope", type: "patients" },
    { text: "Appointments", link: ['/patient/appointment'], class: "fa-calendar", type: "patients" },
    { text: "Providers", link: ['/providers/home'], class: "fa-user", type: "providers" },
    { text: "Patients", link: ['/providers/patient'], class: "fa-male", type: "providers" },
    { text: "Team", link: ['/providers/team'], class: "fa-users", type: "providers" },
    { text: "Lab", link: ['/'], class: "fa-thermometer-empty", type: "providers" },
    { text: "Invite", link: ['/providers/invite'], class: "fa-user-plus", type: "providers" },
    { text: "E-sign", link: ['/'], class: "fa-pencil", type: "providers" },
    { text: "E-fax", link: ['/'], class: "fa-fax", type: "providers" },
    { text: "SMS", link: ['/'], class: "fa-commenting", type: "providers" },
  ]

  ngOnInit() {
    if (this.routeType === undefined || this.routeType === '') { this.routeType = "patients" }
    this.links = this.links.filter(el => el.type === this.routeType);
  }

}
