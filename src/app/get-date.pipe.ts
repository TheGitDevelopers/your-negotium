import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getDate"
})
export class GetDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args === "date") return value ? new Date(value).getDate() : null;
    if (args === "hour")
      return value
        ? new Date(
            new Date(value).setHours(new Date(value).getHours())
          ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : null;
  }
}
