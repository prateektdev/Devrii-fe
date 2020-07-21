import { Component, OnInit, OnDestroy } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    $('body').addClass('test');
  }

  ngOnDestroy() {
    $('body').removeClass('test');
  }
}
