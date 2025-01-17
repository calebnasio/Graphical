import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BaseChartDirective, provideCharts, withDefaultRegisterables} from 'ng2-charts';
import { LineGraphComponent } from './components/line-graph/line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
