import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCenterComponent } from './upload-center.component';

describe('UploadCenterComponent', () => {
  let component: UploadCenterComponent;
  let fixture: ComponentFixture<UploadCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
