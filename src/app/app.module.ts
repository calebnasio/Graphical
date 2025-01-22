import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import {NgxEchartsModule} from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, PieChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  BarChart,
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  CanvasRenderer
]);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VerticalGraphComponent } from './components/barCharts/vertical-graph/vertical-graph.component';
import { HorizontalGraphComponent } from './components/barCharts/horizontal-graph/horizontal-graph.component';
import { DonutGraphComponent } from './components/pieCharts/donut-graph/donut-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    VerticalGraphComponent,
    HorizontalGraphComponent,
    DonutGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    NgxEchartsModule.forRoot({ echarts }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
