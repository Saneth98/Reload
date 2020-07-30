import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {LoginService} from '../../services/login.service';
import {UserObj} from '../../models/userObj';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = '';

  constructor(private validateService: ValidateService, private route: Router, private service: LoginService) {
  }

  ngOnInit(): void {
  }

  login(email, password, check) {
    if (email !== '' && password !== '') {
      if (email === 'admin') {
        // const user: UserObj = {} as UserObj;
        // user.email = email;
        // user.password = password;
        // this.service.loginAdmin(user)
        //   .subscribe((res: any) => {
        //     sessionStorage.setItem('key', res.token);
        //     if (res.value.type === 'admin') {
        //       if (check){
        //         localStorage.setItem('loginType', '1');
        //       }
        //       sessionStorage.setItem('loginType', '1');
        //       this.validateService.login();
        //       this.route.navigate(['admin']);
        //     } else {
        //       if (check){
        //         localStorage.setItem('loginType', '2');
        //       }
        //       sessionStorage.setItem('loginType', '2');
        //       this.validateService.login();
        //       this.route.navigate(['driver']);
        //     }
        //   }, (err) => {
        //     this.error = (`Code ${err.status}, Error was: ${err.error.errorMessage}`);
        //   });
        if (check) {
          localStorage.setItem('loginType', '1');
          localStorage.setItem('userName', email);
        }
        sessionStorage.setItem('loginType', '1');
        sessionStorage.setItem('userName', email);
        this.validateService.login();
        this.route.navigate(['admin/panel']);

      } else {
        console.log(check);
        if (check) {
          localStorage.setItem('loginType', '2');
          localStorage.setItem('userName', email);
        }
        sessionStorage.setItem('loginType', '2');
        sessionStorage.setItem('userName', email);
        this.validateService.login();
        this.route.navigate(['driver']);
      }
    } else {
      this.error = 'Values Cannot Be Empty';
    }
  }
}
