import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectconfigurationComponent } from './projectconfiguration.component';

describe('ProjectconfigurationComponent', () => {
  let component: ProjectconfigurationComponent;
  let fixture: ComponentFixture<ProjectconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
