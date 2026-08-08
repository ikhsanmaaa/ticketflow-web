import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyCardComponent } from './privacy-card.component';

describe('PrivacyCardComponent', () => {
  let component: PrivacyCardComponent;
  let fixture: ComponentFixture<PrivacyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
