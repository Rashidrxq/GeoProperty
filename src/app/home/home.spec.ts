import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { Buy } from '../buy/buy';
import { Sell } from '../sell/sell';
import { Rental } from '../rental/rental';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, Buy, Sell, Rental],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
