import { Component } from '@angular/core';
import {ScaleType} from '@swimlane/ngx-charts';
import { single } from '../data';

@Component({
  selector: 'app-vertical-graph',
  standalone: false,

  templateUrl: './vertical-graph.component.html',
  styleUrl: './vertical-graph.component.scss'
})
export class VerticalGraphComponent {

  single: { name: string; value: number; }[] = [];
  // multi: any[];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  schemeType = ScaleType.Ordinal;

  colorScheme = 'fire';

  constructor() {
    this.single = single;
  }

  onSelect(event: any) {
    console.log(event);
  }

}
