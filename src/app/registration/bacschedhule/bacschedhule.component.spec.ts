import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacschedhuleComponent } from './bacschedhule.component';

describe('BacschedhuleComponent', () => {
  let component: BacschedhuleComponent;
  let fixture: ComponentFixture<BacschedhuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacschedhuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacschedhuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
