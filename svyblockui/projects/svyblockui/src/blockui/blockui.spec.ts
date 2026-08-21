import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SvyBlockUI } from './blockui';

describe('SvyBlockUI', () => {
  let component: SvyBlockUI;
  let fixture: ComponentFixture<SvyBlockUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvyBlockUI],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(SvyBlockUI, {
      set: { template: '' }
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvyBlockUI);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
