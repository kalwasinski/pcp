import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XsizepanelComponent } from './xsizepanel.component';

describe('XsizepanelComponent', () => {
  let component: XsizepanelComponent;
  let fixture: ComponentFixture<XsizepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XsizepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XsizepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
