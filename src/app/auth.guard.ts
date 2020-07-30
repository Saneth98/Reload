import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from './models/role';
import {ValidateService} from './services/validate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: ValidateService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(['login']);
      return false;
    }

    const roles = route.data.roles as Role[];
    if (roles && !roles.some(r => this.authService.hasRole(r))) {
      this.router.navigate(['error', 'not-found']);
      return false;
    }

    return true;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthorized()) {
      return false;
    }

    const roles = route.data && route.data.roles as Role[];
    if (roles && !roles.some(r => this.authService.hasRole(r))) {
      return false;
    }

    return true;
  }
}

