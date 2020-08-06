import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuccessComponent } from './addsuccess.component';

describe('AddsuccessComponent', () => {
  let component: AddsuccessComponent;
  let fixture: ComponentFixture<AddsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
