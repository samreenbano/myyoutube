import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdummyComponent } from './searchdummy.component';

describe('SearchdummyComponent', () => {
  let component: SearchdummyComponent;
  let fixture: ComponentFixture<SearchdummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
