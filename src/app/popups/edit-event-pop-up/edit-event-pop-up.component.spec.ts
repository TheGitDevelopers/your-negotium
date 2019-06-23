import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditEventPopUpComponent } from "./edit-event-pop-up.component";

describe("EditEventPopUpComponent", () => {
  let component: EditEventPopUpComponent;
  let fixture: ComponentFixture<EditEventPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditEventPopUpComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
