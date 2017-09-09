import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareagentComponent } from './compareagent.component';

describe('CompareagentComponent', () => {
  let component: CompareagentComponent;
  let fixture: ComponentFixture<CompareagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
