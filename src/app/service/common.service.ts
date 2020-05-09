import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  toggleClass(cssClass: string, action: string) {
    if (action === 'add') {
      $('body').addClass(cssClass);
    } else {
      $('body').removeClass(cssClass);
    }
  }
}
