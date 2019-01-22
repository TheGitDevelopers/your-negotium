import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauponaContentComponent } from './caupona-content.component';

describe('CauponaContentComponent', () => {
  let component: CauponaContentComponent;
  let fixture: ComponentFixture<CauponaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauponaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauponaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
