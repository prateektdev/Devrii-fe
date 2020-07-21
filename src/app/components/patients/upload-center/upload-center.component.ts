import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonService } from '../../../service/common.service';

declare const $: any;

@Component({
  selector: "app-upload-center",
  templateUrl: "./upload-center.component.html",
  styleUrls: ["./upload-center.component.css"],
})
export class UploadCenterComponent implements OnInit, OnDestroy {
  constructor(private common: CommonService) { }

  public opened = false;

  ngOnInit() {
    this.common.scrollToBottom();
    $('#smallModel').modal('show');
  }

  ngOnDestroy() {
    $("#smallModel").modal("hide");
  }
}
