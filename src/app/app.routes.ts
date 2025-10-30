import {Routes} from '@angular/router';
import {ProjectPage} from './pages/project-page/project-page';
import {HomePage} from './pages/home-page/home-page';
import {PROJECT_RESOLVABLE} from './resolvables/project.resolvable';
import {PROJECTS_RESOLVABLE} from './resolvables/projects.resolvable';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {...PROJECTS_RESOLVABLE}
  },
  {
    path: 'projects/:projectId',
    component: ProjectPage,
    resolve: PROJECT_RESOLVABLE
  }
];
