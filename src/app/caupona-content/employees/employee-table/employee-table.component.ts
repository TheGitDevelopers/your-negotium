import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-employee-table",
  templateUrl: "./employee-table.component.html",
  styleUrls: ["./employee-table.component.scss"]
})
export class EmployeeTableComponent {
  @Input() employeesLabel;
  @Input() employeesList;
  @Input() mainText;
  @Input() secondaryText;
  @Input() mode;
  @Output() handleRowClickEmitter: EventEmitter<any> = new EventEmitter();
  @Output() handleLabelClickEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  handleRowClick(employee) {
    if (this.handleRowClickEmitter.observers.length) {
      this.handleRowClickEmitter.emit(employee);
    }
  }

  handleLabelClick(labelName, employee) {
    if (this.handleLabelClickEmitter.observers.length) {
      this.handleLabelClickEmitter.emit({ labelName, employee });
    }
  }
}
