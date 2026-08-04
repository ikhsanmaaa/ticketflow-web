import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSkeleton } from './ticket-skeleton';

describe('TicketSkeleton', () => {
  let component: TicketSkeleton;
  let fixture: ComponentFixture<TicketSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
