import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickmathComponent } from './quickmath.component';

describe('QuickmathComponent', () => {
  let component: QuickmathComponent;
  let fixture: ComponentFixture<QuickmathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickmathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickmathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
