import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";
import { HideList } from "src/app/animations/transform";

@Component({
  selector: "app-dropdown-menu",
  templateUrl: "./dropdown-menu.component.html",
  styleUrls: ["./dropdown-menu.component.scss"],
  animations: [HideList]
})
export class DropdownMenuComponent implements OnInit {
  @Output() changeMode: EventEmitter<any> = new EventEmitter();
  @Input() actualModeParams;
  isSelectBoxOpened: Boolean;
  actualMode;

  constructor() {}

  ngOnInit() {
    this.actualMode = this.actualModeParams;
  }

  handleChangeMode() {
    this.changeMode.emit(this.actualMode);
  }

  toggleSelectBox() {
    this.isSelectBoxOpened = !this.isSelectBoxOpened;
  }

  get stateStatus() {
    return this.isSelectBoxOpened ? "show" : "hide";
  }
}
