import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvyBlockUI } from './blockui';

describe('SvyBlockUI', () => {
  let component: SvyBlockUI;
  let fixture: ComponentFixture<SvyBlockUI>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvyBlockUI ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvyBlockUI);
    component = fixture.componentInstance;
    component.servoyApi =  jasmine.createSpyObj('ServoyApi', ['getMarkupId','trustAsHtml','registerComponent','unRegisterComponent']);
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
