import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { exhaustMap, take } from "rxjs";
@Injectable()
export class InteceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.Users.pipe(take(1), exhaustMap(
            user => {
                if (!user) {
                    return next.handle(req);
                }
                const modiified = req.clone({ params: new HttpParams().set('auth', user.token)})
                return next.handle(modiified);                
            }
        ))
    }
}