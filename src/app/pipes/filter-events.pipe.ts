import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterEvents"
})
export class FilterEventsPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    if (args[1] === "day") {
      return value.filter(event => {
        return (
          new Date(
            new Date(event.time).setHours(new Date(event.time).getHours())
          ).getHours() === args[0].getHours()
        );
      });
    } else {
      return value;
    }
  }
}
