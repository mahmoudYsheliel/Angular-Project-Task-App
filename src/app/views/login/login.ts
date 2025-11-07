import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '@core/services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',

})
export class Login {

  btnPt = {
    host:{style:'width:100%;'},
    root:{style:'width:100%;color:black;background:white;height:4rem'},
    label:{style:'font-size:1.5rem;font-weight:500;'}
  }


  authService = inject(AuthService)
  email = signal('')
  pass = signal('')
  constructor() {
  }


  login(){

    this.authService.login(this.email(),this.pass())
  }
  

  
}
