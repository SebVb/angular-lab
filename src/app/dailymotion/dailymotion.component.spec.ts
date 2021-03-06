import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailymotionComponent } from './dailymotion.component';

describe('DailymotionComponent', () => {
  let component: DailymotionComponent;
  let fixture: ComponentFixture<DailymotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailymotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailymotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
