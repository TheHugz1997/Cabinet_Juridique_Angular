import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDomaineComponent } from './creation-domaine.component';

describe('CreationDomaineComponent', () => {
  let component: CreationDomaineComponent;
  let fixture: ComponentFixture<CreationDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDomaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
