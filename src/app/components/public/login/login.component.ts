import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private common: CommonService, private api: ApiService, private router: Router) { }

  public modal: any = {};
  public spin = false;

  ngOnInit() {
    /* if (this.common.checkLogin) {
      this.router.navigate(['/home']);
    } */
    this.common.toggleClass('login_page', 'add');
    this.common.toggleClass('login-bg', 'add');
  }

  // sheriahmad@hotmail.com
  // S@!man1255

  login(form: NgForm) {
    this.spin = true;
    this.modal.grant_type = 'password';
    const data = new HttpParams({ fromObject: this.modal });
    this.api.login(data).subscribe(res => {
      localStorage.setItem('isLogin', 'true');
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('loginResponse', JSON.stringify(res));
      this.spin = false;
      this.router.navigate(['/home']);
    }, err => {
      this.common.openSnackBar('Invalid E-mail or Password !', 'Dismiss');
      this.spin = false;
      form.resetForm();
      console.log(err);
    });
  }

  ngOnDestroy() {
    this.common.toggleClass('login_page', 'rm');
    this.common.toggleClass('login-bg', 'rm');
  }
}
