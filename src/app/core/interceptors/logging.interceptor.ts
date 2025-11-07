import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";


@Injectable({providedIn:'root'})
export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('LoggingInterceptor started')
        return next.handle(req).pipe(
            tap({
                next:(event)=>{

                    if(event instanceof HttpResponse){
                        console.log({logging:event.body})
                        console.log('LoggingInterceptor passed successfully')
                    }
                },
                error:(err)=>{
                    console.error('LoggingInterceptor fails with error:', err) 
                }
            })

        )
    }
}