import {Routes} from '@angular/router';
import {ProjectPage} from './pages/project-page/project-page';
import {HomePage} from './pages/home-page/home-page';
import {PROJECT_RESOLVABLE} from './resolvables/project-resolvable';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'projects/:projectId',
    component: ProjectPage,
    resolve: PROJECT_RESOLVABLE
  }
];
