import { Component, ViewChild, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormGroupDirective,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

interface EmployeeInfoInterface {
  name: string;
  value: string;
  tooltip: string;
}

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  @ViewChild("formRef")
  formRef: FormGroupDirective;

  employeeInfoTest = [
    { name: "Name", value: "Frank Smith", tooltip: "" },
    { name: "Index", value: "ZO91", tooltip: "" },
    { name: "Position", value: "Waiter", tooltip: "" },
    { name: "Salary", value: "$14", tooltip: "" },
    { name: "Holiday", value: "20 days", tooltip: "Days to use" },
    { name: "Phone number", value: "+ 42 742 322 001", tooltip: "" },
    { name: "Email", value: "frank.smith@gmail.com", tooltip: "" },
    { name: "Contract type", value: "Temporary", tooltip: "" },
    { name: "Hours worked", value: "40 hours", tooltip: "This month" },
    { name: "Negotium role", value: "Employee", tooltip: "" },
    {
      name: "Additional information",
      value: "This employee has already been paid \n <br/> The director",
      tooltip: ""
    }
  ];
  employeeInfo: Array<EmployeeInfoInterface> = [
    { name: "Name", value: "", tooltip: "" },
    { name: "Index", value: "", tooltip: "" },
    { name: "Position", value: "", tooltip: "" },
    { name: "Salary", value: "", tooltip: "" },
    { name: "Holiday", value: "", tooltip: "Days to use" },
    { name: "Phone number", value: "", tooltip: "" },
    { name: "Email", value: "", tooltip: "" },
    { name: "Contract type", value: "", tooltip: "" },
    {
      name: "Hours worked",
      value: "",
      tooltip: "This month"
    },
    { name: "Negotium role", value: "", tooltip: "" },
    {
      name: "Additional information",
      value: "",
      tooltip: ""
    }
  ];

  periodUnits: Array<String> = ["hour", "day", "week", "month"];

  selectedUnit: String = "hour";

  mode: string;

  form: FormGroup;

  constructor(private route: ActivatedRoute, private routerNavigate: Router) {
    this.form = new FormGroup({});
    this.employeeInfo.forEach(label =>
      this.form.addControl(
        label.name,
        new FormControl(label.value, Validators.required)
      )
    );
  }

  ngOnInit() {
    this.route.params.subscribe(({ employee }) => {
      if (employee === "employee") this.handleEmployeeMode();
      if (employee === "add-employee" || employee === "employee")
        this.mode = employee;
      if (!(employee === "add-employee" || employee === "employee"))
        this.routerNavigate.navigate(["/not-found"]);
    });
  }

  handleEmployeeMode() {
    this.employeeInfoTest.forEach(label => {
      this.form.controls[label.name].disable();
      this.form.controls[label.name].setValue(label.value);
    });
  }

  toggleKey(value) {
    this.form.controls[value].disabled
      ? this.form.controls[value].enable()
      : this.form.controls[value].disable();
  }

  findIfIsDisabledByName(lookingFor) {
    return this.form.controls[lookingFor].disabled;
  }

  findValueByName(lookingFor) {
    return this.form.controls[lookingFor].value;
  }

  submitFormProgrammatically() {
    this.formRef.onSubmit(undefined);
  }

  onSubmit() {
    console.log(this.form);
  }
}
