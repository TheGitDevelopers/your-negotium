import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterEvents"
})
export class FilterEventsPipe implements PipeTransform {
  transform(value, ...args: any): any {
    if (args[1] === "day") {
      // console.log(value);
      // return value.filter(event => {
      //   console.log(
      //     new Date(event.start.dateTime).getHours() === args[0].getHours()
      //   );
      //   console.log(new Date(event.start.dateTime).getHours());
      //   console.log(args[0].getHours());
      //   return new Date(event.start.dateTime).getHours() === args[0].getHours()
      //     ? value
      //     : null;
      // });
    } else {
      return value;
    }
  }
}
