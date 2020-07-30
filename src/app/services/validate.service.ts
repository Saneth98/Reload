import {Injectable} from '@angular/core';
import {Role} from '../models/role';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class ValidateService {
  private user: User;


  isAuthorized() {
    if (sessionStorage.getItem('loginType') === '1' || sessionStorage.getItem('loginType') === '2' ||
      localStorage.getItem('loginType') === '1' || localStorage.getItem('loginType') === '2') {
      return true;
    }
    return !!this.user;
  }

  hasRole(role: Role) {
    let type;
    if (localStorage.getItem('loginType') !== '') {
      type = localStorage.getItem('loginType');
    } else {
      type = sessionStorage.getItem('loginType');
    }
    const val = +type;
    return this.isAuthorized() && val === role;
  }

  login() {
    let type;
    if (localStorage.getItem('loginType') !== '') {
      type = localStorage.getItem('loginType');
    }
    type = sessionStorage.getItem('loginType');
    const val = +type;
    this.user = {Role: val};
  }

  logout() {
    this.user = null;
    sessionStorage.setItem('loginType', '');
    localStorage.setItem('loginType', '');

    localStorage.setItem('userName', '');
    sessionStorage.setItem('userName', '');
  }
}
