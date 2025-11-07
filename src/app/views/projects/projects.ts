import { Component, inject, signal } from '@angular/core';
import { ProjectCard } from 'app/components/project-card/project-card';
import { Sidebar } from 'app/components/sidebar/sidebar';
import { ProjectApiService } from '@core/services/project-api.service';

@Component({
  selector: 'app-projects',
  imports: [Sidebar,ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projectsApi = inject(ProjectApiService)
  projects = signal<any>(null)
  constructor(){
    this.projectsApi.getProjects().subscribe(event=>{this.projects.set(event)})
  }

}
