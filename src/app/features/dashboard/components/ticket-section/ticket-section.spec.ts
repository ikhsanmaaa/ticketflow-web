import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSection } from './ticket-section';

describe('TicketSection', () => {
  let component: TicketSection;
  let fixture: ComponentFixture<TicketSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketSection],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
