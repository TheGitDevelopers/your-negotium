import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FirebaseService } from "src/app/services/firebase.service";
import { FromFirebaseDataSource } from "src/app/data-sources/fromFireBase-data-source";

@Component({
  selector: "app-edit-event",
  templateUrl: "./edit-event.component.html",
  styleUrls: ["./edit-event.component.scss"]
})
export class EditEventComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}
  id;
  myEvent = {};
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      //  this.http.get('api', this.id)....
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
    // let costam = {...this.myEvent, dateTime: this.myEvent.end.dateTime};
    // delete costam.end
  }
  editEvent(event) {
    window.alert(JSON.stringify(event.value));
  }
  deleteEvent() {
    window.alert("Edit event");
  }
}
