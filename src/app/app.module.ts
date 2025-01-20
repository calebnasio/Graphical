import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VerticalGraphComponent } from './components/barGraphs/vertical-graph/vertical-graph.component';
import { HorizontalGraphComponent } from './components/barGraphs/horizontal-graph/horizontal-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalGraphComponent,
    HorizontalGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
