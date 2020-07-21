import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonService } from '../../../service/common.service';

declare const $: any;

@Component({
  selector: "app-provider-upload",
  templateUrl: "./provider-upload.component.html",
  styleUrls: ["./provider-upload.component.css"],
})
export class ProviderUploadComponent implements OnInit, OnDestroy {
  constructor(private common: CommonService) { }

  public opened = false;

  ngOnInit() {
    this.common.scrollToBottom();
    $('#smallModel').modal('show');
  }

  ngOnDestroy() {
    $('#smallModel').modal('hide');
  }
}
