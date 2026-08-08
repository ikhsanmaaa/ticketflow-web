import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSkeletonComponent } from './ticket-skeleton.component';

describe('TicketSkeletonComponent', () => {
  let component: TicketSkeletonComponent;
  let fixture: ComponentFixture<TicketSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketSkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketSkeletonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
