import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { CurrentUserService } from '@shared/services/current-user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private curentUserService: CurrentUserService
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          console.log(authenticated);
          if (this.curentUserService.getUser().is_admin) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }
}