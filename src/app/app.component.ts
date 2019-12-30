import { Component, ViewChild } from "@angular/core";
import { LoadingInterceptorComponent } from "./global-components/loading-interceptor/loading-interceptor.component";
import { HttpStatusService } from "./services/httpstatus.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "restaurant-reservation";
  @ViewChild(LoadingInterceptorComponent, { static: true })
  loadingInterceptor: LoadingInterceptorComponent;

  HTTPActivity: boolean;

  constructor(private httpStatus: HttpStatusService, private http: HttpClient) {
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      this.HTTPActivity = status;
      if (!status) {
        setTimeout(() => {
          this.stop();
        }, 2000);
      }
    });
  }

  stop() {
    this.HTTPActivity = true;
  }

  getExampleHttpData() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/");
  }

  testHttpLoader() {
    const data = this.getExampleHttpData();
    data.subscribe(items => {
      console.log(items);
    });
  }
}
