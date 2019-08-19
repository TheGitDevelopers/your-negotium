import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employee-header",
  templateUrl: "./employee-header.component.html",
  styleUrls: ["./employee-header.component.scss"]
})
export class EmployeeHeaderComponent implements OnInit {
  @Input() employeesLabel;
  @Input() mainText;
  @Input() secondaryText;

  selectedSearchMode = "";

  constructor() {}
  ngOnInit() {
    this.selectedSearchMode = this.employeesLabel[0];
  }
}
