import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePerformanceComponent } from './see-performance.component';

describe('SeePerformanceComponent', () => {
  let component: SeePerformanceComponent;
  let fixture: ComponentFixture<SeePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
