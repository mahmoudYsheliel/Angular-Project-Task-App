import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { AuthService } from "@core/services/auth.service";
import { inject, Inject } from "@angular/core";

export async function authGuard(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const authService = inject(AuthService)
    const router = inject(Router)
    console.log(authService.isAthenticated(),state.url)
    if(authService.isAthenticated() && state.url === '/'){
        router.navigateByUrl('/dashboard')
        return false
    }
    else if(!authService.isAthenticated() && state.url !== '/'){
        router.navigateByUrl('/')
        return false
    }
    return true
}