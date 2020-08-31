import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esign',
  templateUrl: './esign.component.html',
  styleUrls: ['./esign.component.css']
})
export class EsignComponent implements OnInit {

  constructor() { }

  public sidebarOptions = "providers";
  public opened = false;

  ngOnInit() {
  }

}
