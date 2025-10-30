import {Component, ElementRef, QueryList, signal, ViewChildren, WritableSignal} from '@angular/core';
import {About} from '../../components/about/about';
import {Experience} from '../../components/experience/experience';
import {Projects} from '../../components/projects/projects';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [
    FontAwesomeModule,
    About,
    Experience,
    Projects,
    NgClass
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  readonly sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];


  readonly currentSection: WritableSignal<string> = signal('none')

  @ViewChildren('sectionElements') sectionElements!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.currentSection.set(entry.target.id);
          }
        }
      },
      { threshold: 0.7 }
    );

    for (const section of this.sectionElements) {
      observer.observe(section.nativeElement);
    }
  }
}
