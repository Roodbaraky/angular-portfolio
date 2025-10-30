import {ActivatedRouteSnapshot, ResolveData, ResolveFn} from '@angular/router';
import {ProjectService} from '../services/project-service';
import {Project} from '../models/project.model';
import {inject} from '@angular/core';

export const PROJECT_RESOLVABLE_TOKEN: string = 'project'

const projectResolvable: ResolveFn<Project | null> = (route: ActivatedRouteSnapshot) => {
  const projectId: string | null = route.paramMap.get('projectId')
  return projectId ? inject(ProjectService).getProjectById(projectId) : Promise.resolve(null)
}

export const PROJECT_RESOLVABLE: ResolveData = {
  [PROJECT_RESOLVABLE_TOKEN]: projectResolvable
}
