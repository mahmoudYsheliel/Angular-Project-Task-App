import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProjectApiService {
    http = inject(HttpClient)
    getProjects() {
        return this.http.get('http://localhost:3000/projects/')
    }
    getProjectById(id: string) {
        return this.http.get(`http://localhost:3000/projects/${id}`)
    }
    getProjectUsers(id: string) {
        return this.http.get(`http://localhost:3000/users/`).pipe(map((event) => {
          return (event as any[]).filter(e=>{return e.projects.includes(id)})
        }))
    }
    getProjectTasks(id:string){
        return this.http.get(`http://localhost:3000/tasks?project=${id}`)
    }

}