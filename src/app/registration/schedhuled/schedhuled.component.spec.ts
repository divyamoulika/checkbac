import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedhuledComponent } from './schedhuled.component';

describe('SchedhuledComponent', () => {
  let component: SchedhuledComponent;
  let fixture: ComponentFixture<SchedhuledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedhuledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedhuledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
