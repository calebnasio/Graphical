import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import {NgxEchartsModule} from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart, PieChart, LineChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  BrushComponent,
} from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';
import { UniversalTransition } from 'echarts/features';
echarts.use([
  BarChart,
  PieChart,
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  LegendComponent,
  BrushComponent,
  CanvasRenderer,
  UniversalTransition
]);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VerticalGraphComponent } from './components/barCharts/vertical-graph/vertical-graph.component';
import { HorizontalGraphComponent } from './components/barCharts/horizontal-graph/horizontal-graph.component';
import { DonutGraphComponent } from './components/pieCharts/donut-graph/donut-graph.component';
import { CombinedGraphComponent } from './components/barCharts/combined-graph/combined-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    VerticalGraphComponent,
    HorizontalGraphComponent,
    DonutGraphComponent,
    CombinedGraphComponent
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
