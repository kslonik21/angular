import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Injectable()
  export class CanActivateGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}
    canActivate(): Observable<boolean> {
      return new Observable<boolean>((observer: Observer<boolean>) => {
        if (this.authService.isAuthenticated()) {
          observer.next(true);
        } else {
          observer.next(false);
          this.router.navigate(['auth']);
        }
    });
  }
}
