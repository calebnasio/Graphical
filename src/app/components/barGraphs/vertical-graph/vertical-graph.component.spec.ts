import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalGraphComponent } from './vertical-graph.component';

describe('LineGraphComponent', () => {
  let component: VerticalGraphComponent;
  let fixture: ComponentFixture<VerticalGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
