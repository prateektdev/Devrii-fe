import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { ApiService } from '../../../service/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private common: CommonService, private api: ApiService) { }

  public modal: any = {};
  public agree = false;

  ngOnInit() {
    this.common.toggleClass('login-bg', 'add');
  }

  signUp(form: NgForm) {
    if (this.modal.AgreeToTerm === false) {
      this.common.openSnackBar('Please check agree to terms', 'Dismiss');
      return;
    }
    this.api.register(this.modal).subscribe(res => {
      this.afterRes('Sign-up completed successfully !', form);
      console.log(res);
    }, err => {
      this.afterRes('Something went wrong please try again later !', form);
      console.log(err);
    });
  }

  afterRes(message: string, form: NgForm) {
    this.common.openSnackBar(message, 'Dismiss');
    form.resetForm();
  }

  agreeToTerms() {
    if (this.agree === false) {
      this.agree = true;
      this.modal.AgreeToTerm = true;
    } else {
      this.agree = false;
      this.modal.AgreeToTerm = false;
    }
    console.log(this.agree);
  }

  ngOnDestroy() {
    this.common.toggleClass('login-bg', 'rm');
  }

}
