import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TemporaryProductsComponent } from "./temporary-products.component";

describe("TemporaryProductsComponent", () => {
  let component: TemporaryProductsComponent;
  let fixture: ComponentFixture<TemporaryProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemporaryProductsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
