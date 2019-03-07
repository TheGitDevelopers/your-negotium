import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GeneralTargetsComponent } from "./general-targets.component";

describe("GeneralTargetsComponent", () => {
  let component: GeneralTargetsComponent;
  let fixture: ComponentFixture<GeneralTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralTargetsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
