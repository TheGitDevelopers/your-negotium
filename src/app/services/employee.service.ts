import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor() {}

  handleHolidayRequest(status, id) {
    fetch("www");
  }

  fetchEmployee(id) {
    return fetch(`www/${id}`);
  }
}
