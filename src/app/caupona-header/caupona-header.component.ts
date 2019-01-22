import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';


@Component({
  selector: 'app-caupona-header',
  templateUrl: './caupona-header.component.html',
  styleUrls: ['./caupona-header.component.css']
})
export class CauponaHeaderComponent implements OnInit {

  private hint = '';
  private hintsList = ['no guts, no story.', 'screw it, let’s do it.', 'my life is my argument.'];
  constructor() { }

  ngOnInit() {
    this.hint = this.hintsList[angularMath.getIntegerRandomRange(0, 2)];
  }

}
