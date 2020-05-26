import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-upload-center',
  templateUrl: './upload-center.component.html',
  styleUrls: ['./upload-center.component.css']
})
export class UploadCenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#smallModel').modal('show');
  }

}
