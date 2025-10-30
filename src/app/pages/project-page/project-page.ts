import { Component } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Project} from '../../models/project.model';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {
project$: Observable<Project|null>;

constructor(route:ActivatedRoute) {
  this.project$ = route.data.pipe(map((data: any) => data.project));
}

}
