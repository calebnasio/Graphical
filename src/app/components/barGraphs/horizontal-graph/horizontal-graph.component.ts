import { Component } from '@angular/core';
import {ScaleType} from '@swimlane/ngx-charts';
import { single } from '../data';

@Component({
  selector: 'app-horizontal-graph',
  standalone: false,

  templateUrl: './horizontal-graph.component.html',
  styleUrl: './horizontal-graph.component.scss'
})
export class HorizontalGraphComponent {
  single: { name: string; value: number; }[] = [];
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  schemeType = ScaleType.Ordinal;

  public colorScheme = 'air';
  animations = true;

  constructor() {
    this.single = single;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
