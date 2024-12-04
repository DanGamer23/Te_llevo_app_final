import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinConPage } from './fin-con.page';

describe('FinConPage', () => {
  let component: FinConPage;
  let fixture: ComponentFixture<FinConPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinConPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
