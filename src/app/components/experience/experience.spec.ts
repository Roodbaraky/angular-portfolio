import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IExperience } from './experience';

describe('Experience', () => {
  let component: IExperience;
  let fixture: ComponentFixture<IExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
