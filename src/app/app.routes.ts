import { Routes } from '@angular/router';
import { Dashboard } from '@views/dashboard/dashboard';
import { Projects } from '@views/projects/projects';
import { Login } from '@views/login/login';
import { ProjectDetails } from '@views/project-details/project-details';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivateChild: [authGuard],
        children: [
            { path: '', component: Login },
            { path: 'dashboard', component: Dashboard },
            { path: 'projects', component: Projects },
            { path: 'project-details/:id', component: ProjectDetails },
        ]
    }
]