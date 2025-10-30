import {Component} from '@angular/core';
import {map, Observable} from 'rxjs';
import {IProject} from '../../models/project.model';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    AsyncPipe
  ],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projects$:Observable<IProject[]>;

constructor(route:ActivatedRoute) {
  this.projects$ = route.data.pipe(map((data: any) => data.projects));
}
}
