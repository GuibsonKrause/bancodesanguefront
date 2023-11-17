import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTwoFactorComponent } from './auth-two-factor.component';

describe('AuthTwoFactorComponent', () => {
  let component: AuthTwoFactorComponent;
  let fixture: ComponentFixture<AuthTwoFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTwoFactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTwoFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
