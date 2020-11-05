import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlDetailsComponent } from './dl-details.component';

describe('DlDetailsComponent', () => {
  let component: DlDetailsComponent;
  let fixture: ComponentFixture<DlDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
