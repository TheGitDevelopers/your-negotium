import { Component } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent {
  employeeInfo = [
    { name: "Name", value: "Frank Smith", tooltip: null },
    { name: "Index", value: "ZO91", tooltip: null },
    { name: "Position", value: "Waiter", tooltip: null },
    { name: "Salary", value: "$14", tooltip: null },
    { name: "Holiday", value: "20 days", tooltip: "Days to use" },
    { name: "Phone number", value: "+ 42 742 322 001", tooltip: null },
    { name: "Email", value: "frank.smith@gmail.com", tooltip: null },
    { name: "Contract type", value: "Temporary", tooltip: null },
    { name: "Hours worked", value: "40 hours", tooltip: "This month" },
    { name: "Negotium role", value: "Employee", tooltip: null },
    {
      name: "Additional information",
      value: "This employee has already been paid \n <br/> The director"
    }
  ];

  periodUnits = ["hour", "day", "week", "month"];

  selectedUnit = "hour";

  constructor() {}
}
