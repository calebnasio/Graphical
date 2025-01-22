import {Component, OnInit} from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { single} from '../../data/data';

@Component({
  selector: 'app-donut-graph',
  standalone: false,

  templateUrl: './donut-graph.component.html',
  styleUrl: './donut-graph.component.scss'
})
export class DonutGraphComponent implements OnInit{

  chartOption: EChartsCoreOption = {};


  ngOnInit() {
    this.chartOption = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }


}
