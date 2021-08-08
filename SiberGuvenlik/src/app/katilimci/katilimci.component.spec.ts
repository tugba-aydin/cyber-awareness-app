/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KatilimciComponent } from './katilimci.component';

describe('KatilimciComponent', () => {
  let component: KatilimciComponent;
  let fixture: ComponentFixture<KatilimciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatilimciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatilimciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
