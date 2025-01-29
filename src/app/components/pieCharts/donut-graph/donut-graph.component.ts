import {Component, OnInit} from '@angular/core';
import { EChartsCoreOption } from 'echarts/core';
import { pieData } from '../../data/data';

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
      },toolbox: {
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
          data: pieData,
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
