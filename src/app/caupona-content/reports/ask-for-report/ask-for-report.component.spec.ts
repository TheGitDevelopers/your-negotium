import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AskForReportComponent } from "./ask-for-report.component";

describe("AskForReportComponent", () => {
  let component: AskForReportComponent;
  let fixture: ComponentFixture<AskForReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AskForReportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
