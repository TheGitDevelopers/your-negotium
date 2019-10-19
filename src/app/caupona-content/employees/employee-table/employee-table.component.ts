import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.scss"]
})
export class EmployeeTableComponent implements OnInit {
  @Input() employeesLabel;
  @Input() employeesList;
  @Input() mainText;
  @Input() secondaryText;
  @Input() mode;

  constructor() {}

  ngOnInit() {}
}
