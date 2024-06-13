import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopAndDeletePromptComponent } from './stop-and-delete-prompt.component';

describe('StopAndDeletePromptComponent', () => {
  let component: StopAndDeletePromptComponent;
  let fixture: ComponentFixture<StopAndDeletePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopAndDeletePromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StopAndDeletePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
