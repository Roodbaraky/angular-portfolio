import {Component, ElementRef, HostListener, inject, QueryList, signal, ViewChildren, WritableSignal} from '@angular/core';
import {About} from '../../components/about/about';
import {Experience} from '../../components/experience/experience';
import {Projects} from '../../components/projects/projects';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {NgClass} from '@angular/common';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

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
  private readonly sanitizer = inject(DomSanitizer);

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  protected readonly faFileDownload = faFileDownload;
  protected isCvModalOpen = false;
  protected readonly cvDownloadUrl = 'https://drive.google.com/uc?export=download&id=1BOUzJuSOYYIgNVAsDB4ZPorNClHM9_5_';
  protected readonly cvPreviewUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://drive.google.com/file/d/1BOUzJuSOYYIgNVAsDB4ZPorNClHM9_5_/preview'
  );

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

  protected openCvModal(): void {
    this.isCvModalOpen = true;
  }

  protected closeCvModal(): void {
    this.isCvModalOpen = false;
  }

  @HostListener('document:keydown.escape')
  protected handleEscapeKey(): void {
    if (this.isCvModalOpen) {
      this.closeCvModal();
    }
  }
}
