import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinPasPage } from './fin-pas.page';

describe('FinPasPage', () => {
  let component: FinPasPage;
  let fixture: ComponentFixture<FinPasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinPasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
