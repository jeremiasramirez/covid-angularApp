import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatDataComponent } from './float-data.component';

describe('FloatDataComponent', () => {
  let component: FloatDataComponent;
  let fixture: ComponentFixture<FloatDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
