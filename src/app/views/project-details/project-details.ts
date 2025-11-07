import { Component, effect, inject, signal } from '@angular/core';
import { Sidebar } from 'app/components/sidebar/sidebar';
import { ProjectApiService } from '@core/services/project-api.service';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '@core/services/user-api.service';
@Component({
  selector: 'app-project-details',
  imports: [Sidebar],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  projectsApi = inject(ProjectApiService)
  usersApi = inject(UserApiService)
  projectId = signal<string>('')
  project = signal<any>(null)
  tasks = signal<any>(null)
  users = signal<any>(null)

  router = inject(ActivatedRoute)

  constructor() {
    this.projectId.set(this.router.snapshot.paramMap.get('id') || '')
    this.usersApi.getUsers().subscribe(event=>{this.users.set(event)})
    effect(() => {
      if (this.projectId()) {
        this.projectsApi.getProjectById(this.projectId()).subscribe(event => {  this.project.set(event) })
        this.projectsApi.getProjectTasks(this.projectId()).subscribe(event=>{this.tasks.set(event)})
      }
    })
  }

  getUerName(id:string){
    return this.users().find((user:any)=>user.id == id).name
  }

}
