import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodummyComponent } from './logodummy.component';

describe('LogodummyComponent', () => {
  let component: LogodummyComponent;
  let fixture: ComponentFixture<LogodummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogodummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogodummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
