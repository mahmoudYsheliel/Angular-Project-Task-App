import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { tap, retry, timeout, finalize } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const maxRetries = 3;
        const delayMs = 1000;
        const timeoutMs = 1000;

        let lastRetry = 0;

        console.log('ErrorInterceptor started')
        return next.handle(req).pipe(
            timeout(timeoutMs),

            retry({
                count: maxRetries,
                delay: (_, retryIndex) => {
                    lastRetry = retryIndex + 1;
                    console.warn(`Retry #${lastRetry} after timeout/error...`);
                    return timer(delayMs);
                },
            }),

            tap({
                next: (event) => {
                    if (event instanceof HttpResponse) 
                        console.log('ErrorInterceptor passed successfully')
                },
                error: (err) => { console.error('ErrorInterceptor fails with error:', err) }
            }),

        );
    }
}
