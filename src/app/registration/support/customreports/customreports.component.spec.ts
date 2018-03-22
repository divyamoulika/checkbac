import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomreportsComponent } from './customreports.component';

describe('CustomreportsComponent', () => {
  let component: CustomreportsComponent;
  let fixture: ComponentFixture<CustomreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
