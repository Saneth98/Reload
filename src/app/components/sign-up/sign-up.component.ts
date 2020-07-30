import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {Router} from "@angular/router";
import {UserObj} from "../../models/userObj";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error = '';

  constructor(private validateService: ValidateService, private route: Router, private service: LoginService) {
  }

  ngOnInit(): void {
  }

  // Create a new Admin
  signUp(email, password, passwordRe) {
    if (email !== '' && password !== '' && passwordRe !== '') {
      if (password === passwordRe) {
        // const user: UserObj = {} as UserObj;
        // user.email = email;
        // user.password = password;
        // this.service.createAdmin(user)
        //   .subscribe((res: any) => {
        //     alert(`Successfully Added. Please Sign In`);
        //     this.route.navigate(['login']);
        //   }, (err) => {
        //     alert((`Code ${err.status}, Error was: ${err.error.errorMessage}`));
        //   });
        alert(`Successfully Added. Please Sign In`);
        this.route.navigate(['login']);
      } else {
        this.error = 'Passwords Does Not Match';
      }
    } else {
      this.error = 'Values Cannot Be Empty';
    }
  }
}
