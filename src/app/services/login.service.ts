import {Injectable} from '@angular/core';
import {UserObj} from '../models/userObj';
import {appconfig} from '../app.config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {
  }

  public createAdmin(user: UserObj): any {
    const url = `${appconfig.restServerURL}/admin/create`;
    return this.httpClient.post(url, {user});
  }
  public loginAdmin(user: UserObj): any {
    const url = `${appconfig.restServerURL}/admin/login`;
    return this.httpClient.post(url, {user});
  }
}
