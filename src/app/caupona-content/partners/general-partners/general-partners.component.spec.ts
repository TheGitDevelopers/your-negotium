import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GeneralPartnersComponent } from "./general-partners.component";

describe("GeneralPartnersComponent", () => {
  let component: GeneralPartnersComponent;
  let fixture: ComponentFixture<GeneralPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralPartnersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
