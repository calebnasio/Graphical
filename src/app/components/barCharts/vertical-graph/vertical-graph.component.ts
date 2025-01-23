import {Component, OnInit} from '@angular/core';
import {EChartsCoreOption} from 'echarts/core';

@Component({
  selector: 'app-vertical-graph',
  standalone: false,

  templateUrl: './vertical-graph.component.html',
  styleUrl: './vertical-graph.component.scss'
})
export class VerticalGraphComponent implements OnInit{

  xAxisData: string[] = [];
  data1: number[] = [];
  data2: number[] = [];
  data3: number[] = [];
  data4: number[] = [];

  emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };

  chartOption: EChartsCoreOption = {};

  ngOnInit() {
    this.generateValues();

    this.chartOption = {
      legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        left: '10%'
      },
      // brush: {
      //   toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      //   xAxisIndex: 0
      // },
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        data: this.xAxisData,
        name: 'X Axis',
        axisLine: { onZero: true },
        splitLine: { show: false },
        splitArea: { show: false }
      },
      yAxis: {},
      grid: {
        bottom: 100
      },
      series: [
        {
          name: 'bar',
          type: 'bar',
          stack: 'one',
          emphasis: this.emphasisStyle,
          data: this.data1
        },
        {
          name: 'bar2',
          type: 'bar',
          stack: 'one',
          emphasis: this.emphasisStyle,
          data: this.data2
        },
        {
          name: 'bar3',
          type: 'bar',
          stack: 'two',
          emphasis: this.emphasisStyle,
          data: this.data3
        },
        {
          name: 'bar4',
          type: 'bar',
          stack: 'two',
          emphasis: this.emphasisStyle,
          data: this.data4
        }
      ]
    };
  }

  generateValues() {
    for (let i = 0; i < 10; i++) {
      this.xAxisData.push(`Country:${i}`);
      this.data1.push(+(Math.random() * 2).toFixed(2));
      this.data2.push(+(Math.random() * 5).toFixed(2));
      this.data3.push(+(Math.random() + 0.3).toFixed(2));
      this.data4.push(+Math.random().toFixed(2));
    }
  }

  onSelect(event: any) {
    console.log(event);
  }

}
