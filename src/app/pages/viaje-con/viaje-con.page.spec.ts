import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeConPage } from './viaje-con.page';

describe('ViajeConPage', () => {
  let component: ViajeConPage;
  let fixture: ComponentFixture<ViajeConPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
