import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {AppRoutingModule} from './app-routing.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CauponaNavComponent } from './caupona-nav/caupona-nav.component';
import { CauponaHeaderComponent } from './caupona-header/caupona-header.component';
import {DashboardComponent} from './caupona-content/dashboard/dashboard.component';
import {CauponaContentComponent} from './caupona-content/caupona-content.component';
import { OrdersComponent } from './caupona-content/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    CauponaNavComponent,
    DashboardComponent,
    CauponaContentComponent,
    CauponaHeaderComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
