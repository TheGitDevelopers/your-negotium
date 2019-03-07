import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FixedProductsComponent } from "./fixed-products.component";

describe("FixedProductsComponent", () => {
  let component: FixedProductsComponent;
  let fixture: ComponentFixture<FixedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixedProductsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
