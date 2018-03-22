import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedhuleComponent } from './schedhule.component';

describe('SchedhuleComponent', () => {
  let component: SchedhuleComponent;
  let fixture: ComponentFixture<SchedhuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedhuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedhuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
