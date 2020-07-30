import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from './services/validate.service';
import {Role} from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reload';
  name = '';

  constructor(private router: Router, private authService: ValidateService) {
  }

  get isAuthorized() {
    if (localStorage.getItem('userName') !== '') {
      this.name = localStorage.getItem('userName');
    } else {
      this.name = sessionStorage.getItem('userName');
    }
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  get isDriver() {
    return this.authService.hasRole(Role.Driver);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}

// ng serve --configuration=si
// ng serve --host 0.0.0.0
