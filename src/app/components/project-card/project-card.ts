import { Component, effect, inject, input, signal } from '@angular/core';
import { ProjectApiService } from '@core/services/project-api.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [NgClass],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  projectId = input.required<string>()
  projectOwner = input()
  projectApi = inject(ProjectApiService)
  project = signal<any>({id:-1,title:'',description:''})
  projectUsers = signal<any>(null)
  router = inject(Router)


  constructor() {
    effect(() => {
      if (this.projectId()){
        this.projectApi.getProjectUsers(this.projectId()).subscribe(event=>this.projectUsers.set(event))
        this.projectApi.getProjectById(this.projectId() as string).subscribe(event => { this.project.set(event) })
      }
   
    })
  }



  routeProjectDetails(){
    this.router.navigateByUrl(`/project-details/${this.projectId()}`)
  }

}
