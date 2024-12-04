import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajandoPage } from './viajando.page';

describe('ViajandoPage', () => {
  let component: ViajandoPage;
  let fixture: ComponentFixture<ViajandoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
