import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeavocatsComponent } from './listeavocats.component';

describe('ListeavocatsComponent', () => {
  let component: ListeavocatsComponent;
  let fixture: ComponentFixture<ListeavocatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeavocatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeavocatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
