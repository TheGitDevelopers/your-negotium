import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CauponaContentComponent } from "./caupona-content/caupona-content.component";
import { DashboardComponent } from "./caupona-content/dashboard/dashboard.component";
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
import { GeneralTargetsComponent } from "./caupona-content/targets/general-targets/general-targets.component";
import { GeneralPartnersComponent } from "./caupona-content/partners/general-partners/general-partners.component";
import { NewTargetComponent } from "./caupona-content/targets/new-target/new-target.component";
import { NewPartnerComponent } from "./caupona-content/partners/new-partner/new-partner.component";
import { DiscountsComponent } from "./caupona-content/sales/discounts/discounts.component";
import { ClientDataComponent } from "./caupona-content/customers/client-data/client-data.component";
import { NewClientComponent } from "./caupona-content/customers/new-client/new-client.component";
import { AskForReportComponent } from "./caupona-content/reports/ask-for-report/ask-for-report.component";
import { DownloadReportComponent } from "./caupona-content/reports/download-report/download-report.component";
import { EmployeeComponent } from "./caupona-content/employees/employee/employee.component";
import { EmployeeSettingsComponent } from "./caupona-content/employees/employee-settings/employee-settings.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "orders",
    component: OrdersComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "temporary" },
      { path: "menu", component: MenuComponent },
      { path: "online-orders", component: OnlineOrdersComponent },
      { path: "local-orders", component: LocalOrdersComponent }
    ]
  },
  { path: "warehouse", component: WarehouseComponent },
  { path: "finance", component: FinanceComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "reservations", component: ReservationsComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "targets", component: TargetsComponent },
  { path: "partners", component: PartnersComponent },
  { path: "sale", component: SalesComponent },
  { path: "customers", component: CustomersComponent },
  { path: "reports", component: ReportsComponent },
  { path: "reports", component: ReportsComponent },
  { path: "dashboard/charts", component: ChartsComponent },
  { path: "dashboard/tables", component: TablesComponent },

  { path: "warehouse/fixed-products", component: FixedProductsComponent },
  {
    path: "warehouse/temporary-products",
    component: TemporaryProductsComponent
  },
  { path: "warehouse/special-products", component: SpecialProductsComponent },
  { path: "warehouse/new-product", component: NewProductComponent },
  { path: "finance/costs", component: CostsComponent },
  { path: "finance/carriage", component: CarriageComponent },
  { path: "finance/consumption", component: ConsumptionComponent },
  { path: "finance/leasing", component: LeasingComponent },
  { path: "employees/holiday", component: HolidayComponent },
  { path: "employees/availability", component: AvailabilityComponent },
  { path: "employees/trainings", component: TrainingsComponent },
  { path: "employees/employee-settings", component: EmployeeSettingsComponent },
  { path: "employees/:employee", component: EmployeeComponent },
  { path: "reservations/general", component: GeneralReservationsComponent },
  {
    path: "reservations/add-new-reservation",
    component: NewReservationComponent
  },
  { path: "calendar/:mode", component: CalendarComponent },
  { path: "calendar/:mode/:y/:m/:d", component: CalendarComponent },
  { path: "targets/general", component: GeneralTargetsComponent },
  { path: "targets/add-new-target", component: NewTargetComponent },
  { path: "partners/general", component: GeneralPartnersComponent },
  { path: "partners/add-new-partner", component: NewPartnerComponent },
  { path: "sale/discounts", component: DiscountsComponent },
  { path: "customers/client-data", component: ClientDataComponent },
  { path: "customers/add-new-client", component: NewClientComponent },
  { path: "reports/ask-for-report", component: AskForReportComponent },
  { path: "reports/download-report", component: DownloadReportComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
