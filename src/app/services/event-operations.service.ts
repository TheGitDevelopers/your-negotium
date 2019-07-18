import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EditEventPopUpComponent } from "../popups/edit-event-pop-up/edit-event-pop-up.component";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class EventOperationsService {
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  updateEvent(event = null) {
    const dialogRef = this.dialog.open(EditEventPopUpComponent, {
      width: "800px",
      data: { event, description: "Edit Event" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        if (result.mode) {
          if (result.mode === "edit")
            this.http
              .put(`${environment.calendarAPIUrl}/events`, {
                event: result.data
              })
              .subscribe(console.log);
          if (result.mode === "delete")
            this.http
              .delete(
                `${environment.calendarAPIUrl}/events/events/${result.data}`
              )
              .subscribe(console.log);
        }
    });
  }

  addEvent(date) {
    const dialogRef = this.dialog.open(EditEventPopUpComponent, {
      width: "800px",
      data: { description: "Add Event", date }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.http
          .post(`${environment.calendarAPIUrl}/events/create`, {
            result: { items: [result.data] }
          })
          .subscribe(console.log);
    });
  }
}
