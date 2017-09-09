import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareagentsComponent } from './compareagents.component';

describe('CompareagentsComponent', () => {
  let component: CompareagentsComponent;
  let fixture: ComponentFixture<CompareagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
