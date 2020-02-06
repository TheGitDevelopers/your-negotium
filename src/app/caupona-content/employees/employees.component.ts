import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent {
  employeesList = [
    {
      id: 5,
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      id: 5,
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      id: 5,
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      id: 5,
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      id: 5,
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    },
    {
      id: 5,
      index: "Z1",
      name: "James Adams",
      status: true,
      position: "Cheff",
      email: "name@email.com"
    }
  ];

  employeesLabel: Object;

  constructor(private routerNavigate: Router) {
    this.employeesLabel = Object.keys(this.employeesList[0]);
  }

  handleRowClick(event) {
    this.routerNavigate.navigate([`/employees/employee/${event.id}`]);
  }
}
