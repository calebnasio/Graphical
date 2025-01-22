import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedGraphComponent } from './combined-graph.component';

describe('CombinedGraphComponent', () => {
  let component: CombinedGraphComponent;
  let fixture: ComponentFixture<CombinedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombinedGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
