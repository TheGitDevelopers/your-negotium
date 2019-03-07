import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-interceptor",
  templateUrl: "./loading-interceptor.component.html",
  styleUrls: ["./loading-interceptor.component.scss"]
})
export class LoadingInterceptorComponent implements OnInit {
  @Input() HTTPActivity;

  constructor() {}

  ngOnInit() {}
}
