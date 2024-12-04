import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponiblePage } from './disponible.page';

describe('DisponiblePage', () => {
  let component: DisponiblePage;
  let fixture: ComponentFixture<DisponiblePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
