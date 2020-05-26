import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  toggleClass(cssClass: string, action: string) {
    if (action === 'add') {
      $('html').addClass(cssClass);
      $('body').addClass(cssClass);
    } else {
      $('html').addClass(cssClass);
      $('body').removeClass(cssClass);
    }
  }
}
