import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "getDate"
})
export class GetDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? value.getDate() : null;
  }
}
