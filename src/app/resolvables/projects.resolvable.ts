import {ResolveData, ResolveFn} from '@angular/router';
import {IProject} from '../models/project.model';
import {inject} from '@angular/core';
import {ProjectService} from '../services/project-service';

export const PROJECTS_RESOLVABLE_TOKEN: string = 'projects'

const projectsResolvable: ResolveFn<IProject[] | null> = () => {
  return inject(ProjectService).getAllProjects()
}

export const PROJECTS_RESOLVABLE: ResolveData = {
  [PROJECTS_RESOLVABLE_TOKEN]: projectsResolvable
}
