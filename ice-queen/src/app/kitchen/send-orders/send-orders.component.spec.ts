import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOrdersComponent } from './send-orders.component';

describe('SendOrdersComponent', () => {
  let component: SendOrdersComponent;
  let fixture: ComponentFixture<SendOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
