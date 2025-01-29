import {Component, OnInit} from '@angular/core';
import { EChartsCoreOption, ECElementEvent } from 'echarts/core';

import { combinedLineBarData } from '../../data/data';

@Component({
  selector: 'app-combined-graph',
  standalone: false,

  templateUrl: './combined-graph.component.html',
  styleUrl: './combined-graph.component.scss'
})
export class CombinedGraphComponent implements OnInit{
  chartOption: EChartsCoreOption = {};

  ngOnInit(): void {
    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          magicType: {
            type: ['stack', 'line', 'bar']
          },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: combinedLineBarData

    }
  }

  onChartClick($event: ECElementEvent) {
    console.log('XXX', $event)
  }
}
