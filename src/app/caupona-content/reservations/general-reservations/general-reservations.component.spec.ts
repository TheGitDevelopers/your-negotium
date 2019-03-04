import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GeneralReservationsComponent } from "./general-reservations.component";

describe("GeneralReservationsComponent", () => {
  let component: GeneralReservationsComponent;
  let fixture: ComponentFixture<GeneralReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralReservationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
