import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterEvents"
})
export class FilterEventsPipe implements PipeTransform {
  transform(value, ...args: any): any {
    if (args[1] === "day") {
      if (value)
        return value.filter(event => {
          return new Date(event.start.date).getHours() === args[0].getHours();
        });
      return null;
    } else {
      return value;
    }
  }
}
