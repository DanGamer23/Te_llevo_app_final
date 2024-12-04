import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnCaminoPage } from './en-camino.page';

describe('EnCaminoPage', () => {
  let component: EnCaminoPage;
  let fixture: ComponentFixture<EnCaminoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCaminoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
