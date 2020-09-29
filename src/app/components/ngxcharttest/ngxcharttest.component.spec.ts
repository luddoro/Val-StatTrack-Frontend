import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxcharttestComponent } from './ngxcharttest.component';

describe('NgxcharttestComponent', () => {
  let component: NgxcharttestComponent;
  let fixture: ComponentFixture<NgxcharttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxcharttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxcharttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
