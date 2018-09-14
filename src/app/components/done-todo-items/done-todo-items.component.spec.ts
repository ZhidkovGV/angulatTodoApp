import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTodoItemsComponent } from './done-todo-items.component';

describe('DoneTodoItemsComponent', () => {
  let component: DoneTodoItemsComponent;
  let fixture: ComponentFixture<DoneTodoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneTodoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
