import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, map, tap } from "rxjs";



@Injectable({ providedIn: 'root' })
export class UserApiService {

    http = inject(HttpClient)


    getUsers(): Observable<any> {
        return this.http.get('http://localhost:3000/users')
    }
    getUserWithCredintials(email: string, pass: string): Observable<any> {
        return this.http.get(`http://localhost:3000/users`).pipe(map((val) => {
            const users = val as any[]
            const user = users.find(user => {
                return user.email === email && user.password === pass
            })
            return user
        }))
    }
    updateUserInfo(id: number, newData: object): Observable<any>  {
        return this.http.patch(`http://localhost:3000/users/${id}`,newData)
    }

}

