import { Component } from "@angular/core";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent {
  employeesList = [
    {
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    }
  ];

  employeesLabel: Object;

  constructor() {
    this.employeesLabel = Object.keys(this.employeesList[0]);
  }
}
