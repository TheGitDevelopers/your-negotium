import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatSliderModule
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
import { ChartsComponent } from "./caupona-content/dashboard/charts/charts.component";
import { TablesComponent } from "./caupona-content/dashboard/tables/tables.component";
import { MenuComponent } from "./caupona-content/orders/menu/menu.component";
import { OnlineOrdersComponent } from "./caupona-content/orders/online-orders/online-orders.component";
import { LocalOrdersComponent } from "./caupona-content/orders/local-orders/local-orders.component";
import { FixedProductsComponent } from "./caupona-content/warehouse/fixed-products/fixed-products.component";
import { TemporaryProductsComponent } from "./caupona-content/warehouse/temporary-products/temporary-products.component";
import { SpecialProductsComponent } from "./caupona-content/warehouse/special-products/special-products.component";
import { NewProductComponent } from "./caupona-content/warehouse/new-product/new-product.component";
import { CostsComponent } from "./caupona-content/finance/costs/costs.component";
import { CarriageComponent } from "./caupona-content/finance/carriage/carriage.component";
import { ConsumptionComponent } from "./caupona-content/finance/consumption/consumption.component";
import { LeasingComponent } from "./caupona-content/finance/leasing/leasing.component";
import { HolidayComponent } from "./caupona-content/employees/holiday/holiday.component";
import { AvailabilityComponent } from "./caupona-content/employees/availability/availability.component";
import { TrainingsComponent } from "./caupona-content/employees/trainings/trainings.component";
import { GeneralReservationsComponent } from "./caupona-content/reservations/general-reservations/general-reservations.component";
import { NewReservationComponent } from "./caupona-content/reservations/new-reservation/new-reservation.component";
import { MeetingsComponent } from "./caupona-content/calendar/meetings/meetings.component";
import { CompanyEventsComponent } from "./caupona-content/calendar/company-events/company-events.component";
import { NewEventComponent } from "./caupona-content/calendar/new-event/new-event.component";
import { GeneralTargetsComponent } from "./caupona-content/targets/general-targets/general-targets.component";
import { NewTargetComponent } from "./caupona-content/targets/new-target/new-target.component";
import { GeneralPartnersComponent } from "./caupona-content/partners/general-partners/general-partners.component";
import { NewPartnerComponent } from "./caupona-content/partners/new-partner/new-partner.component";
import { DiscountsComponent } from "./caupona-content/sales/discounts/discounts.component";
import { ClientDataComponent } from "./caupona-content/customers/client-data/client-data.component";
import { NewClientComponent } from "./caupona-content/customers/new-client/new-client.component";
import { AskForReportComponent } from "./caupona-content/reports/ask-for-report/ask-for-report.component";
import { DownloadReportComponent } from "./caupona-content/reports/download-report/download-report.component";
import { LoadingInterceptorComponent } from "./global-components/loading-interceptor/loading-interceptor.component";
import { HttpListenerService } from "./services/httplistener.service";
import { HttpStatusService } from "./services/httpstatus.service";
import { CalendarSettingsComponent } from "./caupona-content/calendar/calendar-settings/calendar-settings.component";
import { EditEventComponent } from "./caupona-content/calendar/edit-event/edit-event.component";
import { EventFormComponent } from "./custom-components/event-form/event-form.component";
import { EventsLengthPipe } from "./pipes/events-length.pipe";
import { EventsLengthDirective } from "./directives/events-length.directive";
import { CheckMonthDayDirective } from "./check-month-day.directive";

const RxJS_Services = [HttpListenerService, HttpStatusService];

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
    NavItemComponent,
    ChartsComponent,
    TablesComponent,
    MenuComponent,
    OnlineOrdersComponent,
    LocalOrdersComponent,
    FixedProductsComponent,
    TemporaryProductsComponent,
    SpecialProductsComponent,
    NewProductComponent,
    CostsComponent,
    CarriageComponent,
    ConsumptionComponent,
    LeasingComponent,
    HolidayComponent,
    AvailabilityComponent,
    TrainingsComponent,
    GeneralReservationsComponent,
    NewReservationComponent,
    MeetingsComponent,
    CompanyEventsComponent,
    NewEventComponent,
    GeneralTargetsComponent,
    NewTargetComponent,
    GeneralPartnersComponent,
    NewPartnerComponent,
    DiscountsComponent,
    ClientDataComponent,
    NewClientComponent,
    AskForReportComponent,
    DownloadReportComponent,
    LoadingInterceptorComponent,
    CalendarSettingsComponent,
    EditEventComponent,
    EventFormComponent,
    EventsLengthPipe,
    EventsLengthDirective,
    CheckMonthDayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSliderModule,
    HttpClientModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ...RxJS_Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpListenerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
