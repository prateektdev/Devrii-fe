import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.toggleClass('login-bg', 'add');
  }

  ngOnDestroy() {
    this.common.toggleClass('login-bg', 'rm');
  }

}
