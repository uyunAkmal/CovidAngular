import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDeleteComponent } from './covid-delete.component';

describe('CovidDeleteComponent', () => {
  let component: CovidDeleteComponent;
  let fixture: ComponentFixture<CovidDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
