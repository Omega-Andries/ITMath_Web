import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsuggestionComponent } from './appsuggestion.component';

describe('AppsuggestionComponent', () => {
  let component: AppsuggestionComponent;
  let fixture: ComponentFixture<AppsuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
