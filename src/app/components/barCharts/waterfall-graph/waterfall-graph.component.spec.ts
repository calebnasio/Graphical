import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallGraphComponent } from './waterfall-graph.component';

describe('WaterfallGraphComponent', () => {
  let component: WaterfallGraphComponent;
  let fixture: ComponentFixture<WaterfallGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaterfallGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterfallGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
