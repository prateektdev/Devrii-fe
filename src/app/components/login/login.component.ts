import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.toggleClass('login_page', 'add');
    this.common.toggleClass('login-bg', 'add');
  }

  ngOnDestroy() {
    this.common.toggleClass('login_page', 'rm');
    this.common.toggleClass('login-bg', 'rm');
  }
}
