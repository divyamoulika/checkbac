import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorassComponent } from './monitorass.component';

describe('MonitorassComponent', () => {
  let component: MonitorassComponent;
  let fixture: ComponentFixture<MonitorassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
