import {Component} from '@angular/core';
import {About} from '../../components/about/about/about';
import {Experience} from '../../components/experience/experience/experience';
import {Projects} from '../../components/projects/projects';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-page',
  imports: [
    FontAwesomeModule,
    About,
    Experience,
    Projects
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
