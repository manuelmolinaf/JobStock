import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  toHome() {
    this.router.navigateByUrl('pages/home');
  }


  onSubmitLogin() {
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.auth.loginMail(email, password).then(() => {
      this.router.navigateByUrl('pages/home');
    }).catch((err) => {
      window.alert(err);
    });
  }
}
