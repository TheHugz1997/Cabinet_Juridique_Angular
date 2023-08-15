import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAvocatComponent } from './detail-avocat.component';

describe('DetailAvocatComponent', () => {
  let component: DetailAvocatComponent;
  let fixture: ComponentFixture<DetailAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAvocatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
