import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-new-event",
  templateUrl: "./new-event.component.html",
  styleUrls: ["./new-event.component.scss"]
})
export class NewEventComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  createEvent(event) {
    this.http.post("http://localhost:9000/api/event", event.value);
    window.alert(JSON.stringify(event.value));
  }
}
