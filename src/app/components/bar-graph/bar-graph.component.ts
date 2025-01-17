import { Component } from '@angular/core';
import {ScaleType} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-graph',
  standalone: false,

  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.scss'
})
export class BarGraphComponent {
  single = [
    {
      "name": "North Korea",
      "value": 51474
    },
    {
      "name": "Czech Republic",
      "value": 12666
    },
    {
      "name": "Madagascar",
      "value": 47029
    },
    {
      "name": "Macao",
      "value": 53369
    },
    {
      "name": "Tonga",
      "value": 10200
    },
    {
      "name": "Malaysia",
      "value": 52829
    },
    {
      "name": "European Union",
      "value": 46184
    },
    {
      "name": "Libya",
      "value": 44160
    },
    {
      "name": "Lao People's Democratic Republic",
      "value": 29798
    },
    {
      "name": "Mauritania",
      "value": 14387
    },
    {
      "name": "American Samoa",
      "value": 12036
    },
    {
      "name": "Iraq",
      "value": 17554
    },
    {
      "name": "Côte D'Ivoire",
      "value": 15236
    },
    {
      "name": "Tonga",
      "value": 32317
    },
    {
      "name": "Mexico",
      "value": 49070
    },
    {
      "name": "Micronesia",
      "value": 49108
    },
    {
      "name": "Turks and Caicos Islands",
      "value": 50447
    },
    {
      "name": "Burundi",
      "value": 44327
    },
    {
      "name": "French Guiana",
      "value": 14445
    },
    {
      "name": "Qatar",
      "value": 44721
    },
    {
      "name": "Sierra Leone",
      "value": 56347
    },
    {
      "name": "Namibia",
      "value": 43338
    },
    {
      "name": "Bosnia and Herzegovina",
      "value": 51038
    },
    {
      "name": "Pakistan",
      "value": 20809
    }
  ];
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

  public colorScheme = 'horizon';
  animations = true;

  constructor() {
    // Object.assign(this, { this.single });
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
