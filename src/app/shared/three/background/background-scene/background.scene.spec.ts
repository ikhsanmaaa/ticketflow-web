import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundScene } from './background.scene';

describe('BackgroundScene', () => {
  let component: BackgroundScene;
  let fixture: ComponentFixture<BackgroundScene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundScene],
    }).compileComponents();

    fixture = TestBed.createComponent(BackgroundScene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
