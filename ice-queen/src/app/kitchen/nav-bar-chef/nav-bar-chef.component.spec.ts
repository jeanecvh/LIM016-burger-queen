import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarChefComponent } from './nav-bar-chef.component';

describe('NavBarChefComponent', () => {
  let component: NavBarChefComponent;
  let fixture: ComponentFixture<NavBarChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
