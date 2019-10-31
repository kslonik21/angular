import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseitemComponent } from './course-item.component';

describe('CourseitemComponent', () => {
  let component: CourseitemComponent;
  let fixture: ComponentFixture<CourseitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
