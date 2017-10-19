import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTagsComponent } from './view-tags.component';

describe('ViewTagsComponent', () => {
  let component: ViewTagsComponent;
  let fixture: ComponentFixture<ViewTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
