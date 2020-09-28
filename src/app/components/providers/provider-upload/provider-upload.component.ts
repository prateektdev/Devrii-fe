import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonService } from '../../../service/common.service';
import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../includes/dialog/dialog.component';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';

declare const $: any;

@Component({
  selector: "app-provider-upload",
  templateUrl: "./provider-upload.component.html",
  styleUrls: ["./provider-upload.component.css"],
})
export class ProviderUploadComponent implements OnInit, OnDestroy {

  private notifier: NotifierService;

  /* , private toastr: ToastrService */
  constructor(private common: CommonService, public dialog: MatDialog, notifier: NotifierService, private toastr: ToastrService) {
    this.notifier = notifier;
  }

  public opened = false;
  public docterName = "";
  public files: any = [];

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff'
  @HostBinding('style.opacity') private opacity = '1'

  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8'
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
  }

  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }

  ngOnInit() {
    // this.common.scrollToBottom();
    this.toggleModal('#smallModel', 'show');
  }

  uploadFile(event) {
    console.log(event)
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  showName(name: string) {
    this.docterName = name;
    $('#closeBtn').click();
  }

  openNewModal() {
    this.toggleModal('#smallModel', 'hide');
    this.toggleModal('#newModal', 'show');
  }

  toggleModal(name: string, action: string) {
    $(name).modal(action);
  }

  toggleOpacity(id: string) {
    if ($(id).hasClass('noOpactiy')) {
      $(id).removeClass('noOpactiy').addClass('addOpactiy');
    } else {
      $(id).removeClass('addOpactiy').addClass('noOpactiy');
    }
  }

  showNotification() {
    this.toastr.success('success', 'Submission Successfull !', {
      timeOut: 3000,
    });
  }

  ngOnDestroy() {
    this.toggleModal('#smallModel', 'hide');
  }
}
