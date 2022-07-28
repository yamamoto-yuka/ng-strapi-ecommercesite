import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareldetailsComponent } from './appareldetails.component';

describe('AppareldetailsComponent', () => {
  let component: AppareldetailsComponent;
  let fixture: ComponentFixture<AppareldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
