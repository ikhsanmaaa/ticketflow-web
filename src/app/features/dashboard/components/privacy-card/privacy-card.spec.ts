import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyCard } from './privacy-card';

describe('PrivacyCard', () => {
  let component: PrivacyCard;
  let fixture: ComponentFixture<PrivacyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
