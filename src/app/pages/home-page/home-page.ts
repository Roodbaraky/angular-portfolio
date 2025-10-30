import { Component } from '@angular/core';
import {About} from '../../components/about/about/about';
import {Experience} from '../../components/experience/experience/experience';
import {Projects} from '../../components/projects/projects';

@Component({
  selector: 'app-home-page',
  imports: [
    About,
    Experience,
    Projects
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
