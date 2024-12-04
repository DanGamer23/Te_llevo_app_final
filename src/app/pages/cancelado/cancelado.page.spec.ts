import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanceladoPage } from './cancelado.page';

describe('CanceladoPage', () => {
  let component: CanceladoPage;
  let fixture: ComponentFixture<CanceladoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
