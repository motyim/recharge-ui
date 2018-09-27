import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfigerComponent} from './configer.component';

describe('ConfigerComponent', () => {
  let component: ConfigerComponent;
  let fixture: ComponentFixture<ConfigerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
