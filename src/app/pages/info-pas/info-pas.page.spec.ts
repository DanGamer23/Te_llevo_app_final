import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPasPage } from './info-pas.page';

describe('InfoPasPage', () => {
  let component: InfoPasPage;
  let fixture: ComponentFixture<InfoPasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
