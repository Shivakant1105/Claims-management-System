import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimIdDetailComponent } from './claim-id-detail.component';

describe('ClaimIdDetailComponent', () => {
  let component: ClaimIdDetailComponent;
  let fixture: ComponentFixture<ClaimIdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimIdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimIdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
