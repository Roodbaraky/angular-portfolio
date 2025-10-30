import {IProject} from '../models/project.model';
import projectData from "../data/projects.json"
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProjectService {
  async getAllProjects(): Promise<IProject[] | null> {
    const projects: IProject[] = projectData.projects
    return projects ? (projects) : null
  }

  async getProjectById(projectId: string): Promise<IProject | null> {
    const project: IProject | undefined = projectData.projects.find((project: IProject) => project.id.toString() === projectId)
    return project ? project : null
  }

}




