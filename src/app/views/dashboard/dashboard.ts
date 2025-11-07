import { Component, computed, inject, signal } from '@angular/core';
import { Sidebar } from 'app/components/sidebar/sidebar';
import { AuthService } from '@core/services/auth.service';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { UserApiService } from '@core/services/user-api.service';
import { ProjectCard } from 'app/components/project-card/project-card';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, Sidebar, InputText, Button,ProjectCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  authService = inject(AuthService)
  userApi = inject(UserApiService)
  userInfo = signal(this.authService.userInfo())
  editName = signal(false)
  editPhone = signal(false)

  swapEditName() { this.editName.update(v => !v) }
  swapEditPhone() { this.editPhone.update(v => !v) }
  saveChanges() {
    this.userApi.updateUserInfo(this.userInfo().id, {
      name: this.userInfo().name,
      phone: this.userInfo().phone
    }).subscribe((event) => {
      if (event) {
        localStorage.setItem('userInfo',JSON.stringify(event))
        this.userInfo.set(event)
      }
    })
  }


}
