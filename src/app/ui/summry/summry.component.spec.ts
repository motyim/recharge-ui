import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SummryComponent} from './summry.component';

describe('SummryComponent', () => {
  let component: SummryComponent;
  let fixture: ComponentFixture<SummryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
