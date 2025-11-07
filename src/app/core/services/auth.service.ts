import { inject, Injectable, signal } from "@angular/core";
import { UserApiService } from "./user-api.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";


@Injectable({ providedIn: 'root' })
export class AuthService {
    userApi = inject(UserApiService)
    router = inject(Router)
    messageService = inject(MessageService)
    isAthenticated = signal(false)
    userInfo = signal({id:-1, email: '', password: '' ,name:'',phone:'',title:'',projects:[]})



    constructor(){
        const _isAthenticated = localStorage.getItem('isAthenticated')
        const _userInfo = localStorage.getItem('userInfo')
        if(_isAthenticated) this.isAthenticated.set(_isAthenticated === 'true')
        if(_userInfo) this.userInfo.set(JSON.parse(_userInfo))
    }
    
    login(email: string, pass: string) {
        this.userApi.getUserWithCredintials(email, pass).subscribe({
            next: (event) => {
                if (event) {
                    this.isAthenticated.set(true)
                    this.userInfo.set(event)
                    localStorage.setItem('isAthenticated',JSON.stringify(this.isAthenticated()))
                    localStorage.setItem('userInfo',JSON.stringify(this.userInfo()))
                    this.router.navigateByUrl('/dashboard')
                }
                else{
                    this.messageService.add({severity:'warn',summary:'Credintial Errors',detail:'Email or Password are Invalid',life:5000})
                }
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
    logout(){
        localStorage.removeItem('isAthenticated')
        localStorage.removeItem('authCred')
        this.isAthenticated.set(false)
        this.userInfo.set({id:-1, email: '', password: '' ,name:'',phone:'',title:'',projects:[]})
        this.router.navigateByUrl('/')
    }
}