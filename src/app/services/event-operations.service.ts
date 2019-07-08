import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EditEventPopUpComponent } from "../popups/edit-event-pop-up/edit-event-pop-up.component";
import { HttpClient } from "@angular/common/http";

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
      if (result.mode) {
        if (result.mode === "edit")
          this.http
            .put("http://localhost:9000/api/events", result.data.value)
            .subscribe(console.log);
        if (result.mode === "delete")
          this.http
            .delete(`http://localhost:9000/api/events/${result.data.id}`)
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
      console.log(result);
      if (result)
        this.http
          .post("http://localhost:9000/api/events/create", {
            result: { items: [result.data.value] }
          })
          .subscribe(console.log);
    });
  }
}
