import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "eventsLength"
})
export class EventsLengthPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value, args);
    // if(value.length > 3){

    // }
    return value;
  }
}
