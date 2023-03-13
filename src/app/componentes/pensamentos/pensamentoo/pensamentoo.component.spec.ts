import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentooComponent } from './pensamentoo.component';

describe('PensamentooComponent', () => {
  let component: PensamentooComponent;
  let fixture: ComponentFixture<PensamentooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamentooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensamentooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
