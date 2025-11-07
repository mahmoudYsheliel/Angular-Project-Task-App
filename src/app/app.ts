import { Component, inject } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { ToastModule } from 'primeng/toast';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ToastModule,Toast, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App  {


}
