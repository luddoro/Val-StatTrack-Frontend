import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentationPageComponent } from './experimentation-page.component';

describe('ExperimentationPageComponent', () => {
  let component: ExperimentationPageComponent;
  let fixture: ComponentFixture<ExperimentationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
