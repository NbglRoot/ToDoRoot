import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaskFormComponent } from './input-task-form.component';

describe('InputTaskFormComponent', () => {
  let component: InputTaskFormComponent;
  let fixture: ComponentFixture<InputTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
