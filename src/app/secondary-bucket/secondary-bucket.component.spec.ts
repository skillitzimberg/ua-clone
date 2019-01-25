import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryBucketComponent } from './secondary-bucket.component';

describe('SecondaryBucketComponent', () => {
  let component: SecondaryBucketComponent;
  let fixture: ComponentFixture<SecondaryBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
