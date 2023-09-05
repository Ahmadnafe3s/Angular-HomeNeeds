import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private route: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.authService.Users.pipe(take(1) , map(
            User => {
                const user = !User ? false : true;
                if (user) {
                    return true;
                } else {
                    return this.route.createUrlTree(['/auth']);
                }
            }
        ));
    }
}