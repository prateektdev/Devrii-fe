import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersMessagesComponent } from './providers-messages.component';

describe('ProvidersMessagesComponent', () => {
  let component: ProvidersMessagesComponent;
  let fixture: ComponentFixture<ProvidersMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
