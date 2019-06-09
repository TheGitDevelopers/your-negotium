import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-edit-event",
  templateUrl: "./edit-event.component.html",
  styleUrls: ["./edit-event.component.scss"]
})
export class EditEventComponent implements OnInit {
  id;
  myEvent = {};
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id"));
      const calendarEvents = new FromFirebaseDataSource(
        this.firebaseService,
        "calendar"
      )
        .connect()
        .subscribe(calendar => {
          calendar.find(day => {
            return day.events.find(events => {
              if (events.eventId === this.id) {
                this.myEvent = events;
                return true;
              }
            });
          });
        });
    });
  }
  editEvent(event) {
    this.http
      .put(`http://localhost:9000/api/events`, event)
      .subscribe(console.log);
    window.alert(JSON.stringify(event.value));
  }
  deleteEvent() {
    this.http
      .delete(`http://localhost:9000/api/events/${this.id}`)
      .subscribe(console.log);
    window.alert("Delete event");
  }
}
