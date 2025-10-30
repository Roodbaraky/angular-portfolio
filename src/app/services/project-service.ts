import {Project} from '../models/project.model';
import projectData from "../data/projects.json"
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProjectService {
  async getAllProjects(): Promise<Project[] | null> {
    const projects: Project[] = projectData.projects
    return projects ? (projects) : null
  }

  async getProjectById(projectId: string): Promise<Project | null> {
    const project: Project | undefined = projectData.projects.find((project: Project) => project.id.toString() === projectId)
    return project ? project : null
  }

}




