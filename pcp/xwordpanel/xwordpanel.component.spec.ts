import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XwordpanelComponent } from './xwordpanel.component';

describe('XwordpanelComponent', () => {
  let component: XwordpanelComponent;
  let fixture: ComponentFixture<XwordpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XwordpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XwordpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
