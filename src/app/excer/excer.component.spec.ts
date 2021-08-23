import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerComponent } from './excer.component';

describe('ExcerComponent', () => {
  let component: ExcerComponent;
  let fixture: ComponentFixture<ExcerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
