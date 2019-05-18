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
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private http: HttpClient
  ) {}
  id;
  myEvent = {};
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
    this.http.put(`http://localhost:9000/api/event/${this.id}`, event);
    window.alert(JSON.stringify(event.value));
  }
  deleteEvent(event) {
    this.http.delete(`http://localhost:9000/api/event/${this.id}`);
    window.alert("Edit event");
  }
}
