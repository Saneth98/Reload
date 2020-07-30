import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAdminComponent } from './driver-admin.component';

describe('DriverAdminComponent', () => {
  let component: DriverAdminComponent;
  let fixture: ComponentFixture<DriverAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
