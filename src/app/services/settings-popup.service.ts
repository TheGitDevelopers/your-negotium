import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SettingsPopupComponent } from "src/app/popups/settings-popup/settings-popup.component";

@Injectable({
  providedIn: "root"
})
export class SettingsPopupService {
  constructor(public dialog: MatDialog) {}

  open() {
    this.dialog.open(SettingsPopupComponent, {
      width: "500px"
    });
  }
}
