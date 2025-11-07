import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  selectedPage = input()
  router = inject(Router)
  authService = inject(AuthService)
  routeDashboard(){
    this.router.navigateByUrl('/dashboard')
  }
  routeProjects(){
    this.router.navigateByUrl('/projects')
  }
  logout(){
    this.authService.logout()
  }

}
