import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersDocumentsComponent } from './providers-documents.component';

describe('ProvidersDocumentsComponent', () => {
  let component: ProvidersDocumentsComponent;
  let fixture: ComponentFixture<ProvidersDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
