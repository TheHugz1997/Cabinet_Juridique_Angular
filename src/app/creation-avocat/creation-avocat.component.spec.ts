import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAvocatComponent } from './creation-avocat.component';

describe('CreationAvocatComponent', () => {
  let component: CreationAvocatComponent;
  let fixture: ComponentFixture<CreationAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationAvocatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
