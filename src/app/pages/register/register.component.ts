import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  @ViewChild('email') email: ElementRef;
  @ViewChild('type') type: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('fName') fName: ElementRef;
  @ViewChild('lName') lName: ElementRef;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }



  onSubmit() {



    const email = this.email.nativeElement.value;
    const type = this.type.nativeElement.value;
    const password = this.password.nativeElement.value;
    const fName = this.fName.nativeElement.value;
    const lName = this.lName.nativeElement.value;


    const data: any = {
      email:email,
      firstName: fName,
      lastName: lName,
      accountType: type
    };

    this.auth.emailLogin(email, password, data).then(() => {
        this.router.navigateByUrl('pages/login');
    }).catch((err) => {
      window.alert(err);
    });

  }

}
