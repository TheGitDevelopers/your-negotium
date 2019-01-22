import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauponaNavComponent } from './caupona-nav.component';

describe('CauponaNavComponent', () => {
  let component: CauponaNavComponent;
  let fixture: ComponentFixture<CauponaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauponaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauponaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
