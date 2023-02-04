import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinTodoComponent } from './popin-todo.component';

describe('PopinTodoComponent', () => {
  let component: PopinTodoComponent;
  let fixture: ComponentFixture<PopinTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
