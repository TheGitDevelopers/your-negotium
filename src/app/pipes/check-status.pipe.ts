import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "checkStatus"
})
export class CheckStatusPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (typeof value === "boolean") {
      if (value) return `<i class="fas fa-check"></i>`;
      if (!value) return '<i class="fas fa-times"></i>';
    }
    if (args[0] === "Available days")
      return `<span class="blue-color">${value} days</span>`;
    return value;
  }
}
