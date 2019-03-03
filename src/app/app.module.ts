import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { CauponaNavComponent } from "./caupona-nav/caupona-nav.component";
import { CauponaHeaderComponent } from "./caupona-header/caupona-header.component";
import { DashboardComponent } from "./caupona-content/dashboard/dashboard.component";
import { CauponaContentComponent } from "./caupona-content/caupona-content.component";
import { OrdersComponent } from "./caupona-content/orders/orders.component";
import { WarehouseComponent } from "./caupona-content/warehouse/warehouse.component";
import { FinanceComponent } from "./caupona-content/finance/finance.component";
import { EmployeesComponent } from "./caupona-content/employees/employees.component";
import { ReservationsComponent } from "./caupona-content/reservations/reservations.component";
import { CalendarComponent } from "./caupona-content/calendar/calendar.component";
import { TargetsComponent } from "./caupona-content/targets/targets.component";
import { PartnersComponent } from "./caupona-content/partners/partners.component";
import { SalesComponent } from "./caupona-content/sales/sales.component";
import { CustomersComponent } from "./caupona-content/customers/customers.component";
import { ReportsComponent } from "./caupona-content/reports/reports.component";
import { NotFoundComponent } from "./caupona-content/not-found/not-found.component";
import { TabNavbarComponent } from "./custom-components/tab-navbar/tab-navbar.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { NavItemComponent } from "./caupona-nav/nav-item/nav-item.component";

@NgModule({
  declarations: [
    AppComponent,
    CauponaNavComponent,
    DashboardComponent,
    CauponaContentComponent,
    CauponaHeaderComponent,
    OrdersComponent,
    WarehouseComponent,
    FinanceComponent,
    EmployeesComponent,
    ReservationsComponent,
    CalendarComponent,
    TargetsComponent,
    PartnersComponent,
    SalesComponent,
    CustomersComponent,
    ReportsComponent,
    NotFoundComponent,
    TabNavbarComponent,
    NavItemComponent
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
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
