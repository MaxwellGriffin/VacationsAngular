import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
//import 'rxjs/add/operatior/map';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if (!localStorage.getItem('id_token')) {
                this.router.navigate(['/login']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        });
    }
}