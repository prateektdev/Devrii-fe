import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public isLogin = false;

  ngOnInit() {
  }

  showDropDown() {
    $('.dropdown-menu').toggleClass('show');
  }

}
