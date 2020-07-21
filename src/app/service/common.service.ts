import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ApiService } from './api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar, private api: ApiService, private router: Router) { }

  toggleClass(cssClass: string, action: string) {
    if (action === 'add') {
      $('html').addClass(cssClass);
      $('body').addClass(cssClass);
    } else {
      $('html').addClass(cssClass);
      $('body').removeClass(cssClass);
    }
  }

  toggleModel(el: string) {
    $(el).modal('toggle')
  }

  scrollToBottom() {
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
  }

  openSnackBar(msg: string, action: string) {
    this.snackBar.open(msg, action, { duration: 5000 });
  }
}
