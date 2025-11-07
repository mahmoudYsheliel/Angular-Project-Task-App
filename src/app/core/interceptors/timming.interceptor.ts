import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class TimimngInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const startTime = performance.now()
        console.log('TimimngInterceptor started')
        return next.handle(req).pipe(
            tap({
                next: (event) => {
                    if (event instanceof HttpResponse) {
                        const endTime = performance.now()
                        console.log({ time: endTime - startTime })
                        console.log('TimimngInterceptor passed successfully')
                    }
                },
                error: (err) => {
                    const endTime = new Date().getTime()
                    console.log({ time: endTime - startTime })
                    console.error('ErrorInterceptor fails with error:', err)                }
            }),
        )
    }
}