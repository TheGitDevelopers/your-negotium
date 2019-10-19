import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CircleGraphFullComponent } from "./circle-graph-full.component";

describe("CircleGraphFullComponent", () => {
  let component: CircleGraphFullComponent;
  let fixture: ComponentFixture<CircleGraphFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CircleGraphFullComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleGraphFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
