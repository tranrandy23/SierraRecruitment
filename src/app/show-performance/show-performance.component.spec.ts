import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPerformanceComponent } from './show-performance.component';

describe('ShowPerformanceComponent', () => {
  let component: ShowPerformanceComponent;
  let fixture: ComponentFixture<ShowPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
