import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderUploadComponent } from './provider-upload.component';

describe('ProviderUploadComponent', () => {
  let component: ProviderUploadComponent;
  let fixture: ComponentFixture<ProviderUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
