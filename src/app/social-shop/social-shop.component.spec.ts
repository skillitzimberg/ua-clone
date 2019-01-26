import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShopComponent } from './social-shop.component';

describe('SocialShopComponent', () => {
  let component: SocialShopComponent;
  let fixture: ComponentFixture<SocialShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
