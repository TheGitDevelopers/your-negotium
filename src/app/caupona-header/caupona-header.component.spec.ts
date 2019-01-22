import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauponaHeaderComponent } from './caupona-header.component';

describe('CauponaHeaderComponent', () => {
  let component: CauponaHeaderComponent;
  let fixture: ComponentFixture<CauponaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauponaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauponaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
