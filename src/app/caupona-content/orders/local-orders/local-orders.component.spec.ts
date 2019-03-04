import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LocalOrdersComponent } from "./local-orders.component";

describe("LocalOrdersComponent", () => {
  let component: LocalOrdersComponent;
  let fixture: ComponentFixture<LocalOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalOrdersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
