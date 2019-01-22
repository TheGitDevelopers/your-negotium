import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caupona-nav',
  templateUrl: './caupona-nav.component.html',
  styleUrls: ['./caupona-nav.component.css']
})
export class CauponaNavComponent implements OnInit {

  private menuStatus = false;
  private counter = 0;
  private mobileView = false;
  private logoText = 'caupona';

  constructor() {
    if (window.screen.width === 768) {
      this.mobileView = true;
      this.logoText = 'ca';
      this.menuStatus = true;
    }
  }

  ngOnInit() {}

  changeText () {
    this.menuStatus ? this.logoText = 'ca' : this.logoText = 'Caupona';
  }

  wrapMenu() {
    if (this.counter === 0) {
      this.counter++;
      this.menuStatus = !this.menuStatus;
      this.changeText();
    } else  {
      this.menuStatus = !this.menuStatus;
      this.changeText();
    }
  }
}
