import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private common: CommonService, private api: ApiService) { }

  public modal: any = {};

  ngOnInit() {
    this.common.toggleClass('login_page', 'add');
    this.common.toggleClass('login-bg', 'add');
  }

  login(form: NgForm) {
    this.modal.grant_type = 'password';
    console.log(this.modal);
    this.api.login(this.modal).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  ngOnDestroy() {
    this.common.toggleClass('login_page', 'rm');
    this.common.toggleClass('login-bg', 'rm');
  }
}
