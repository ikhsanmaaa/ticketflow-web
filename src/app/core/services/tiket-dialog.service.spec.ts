import { TestBed } from '@angular/core/testing';
import { TicketDialogService } from './tiket-dialog.service';

describe('TiketDialogService', () => {
  let service: TicketDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
