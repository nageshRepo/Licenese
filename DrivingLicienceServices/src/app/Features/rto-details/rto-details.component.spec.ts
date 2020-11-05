import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoDetailsComponent } from './rto-details.component';

describe('RtoDetailsComponent', () => {
  let component: RtoDetailsComponent;
  let fixture: ComponentFixture<RtoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
