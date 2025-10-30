import {Component} from '@angular/core';

export interface IExperience {
  dateRange: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: IExperience[] = [
    {
      dateRange: 'Nov 2024 - Present',
      title: 'Apprentice Software Engineer',
      company: 'MHR',
      companyUrl: 'https://mhrglobal.com/uk/en',
      description: 'Responsible for full-stack development on the PeopleFirst platform, delivering end-to-end product features by implementing backend services with Java and Jakarta EE, designing RESTful APIs, and creating dynamic frontend functionality with Angular and TypeScript. Applied best practices in code quality, testing, and performance optimization.',
      technologies: ['Java', 'Jakarta EE', 'Angular', 'TypeScript', 'Object-Oriented Programming','Domain-Driven Design']
    },
    {
      dateRange: 'Mar 2024 - Jun 2024',
      title: 'Trainee Software Engineer',
      company: 'Northcoders',
      companyUrl: 'https://www.northcoders.com/',
      description: 'Completed a 13-week intensive program specializing in full-stack web development with specific emphasis on JavaScript, test-driven development, PostgreSQL, and React. Actively participated in paired programming sessions and developed proficiency in reading and writing technical documentation. Demonstrated skills through a collaborative group project, contributing to the design and delivery of a web application within a three-week timeframe.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'PostgreSQL']
    }
  ];
}
