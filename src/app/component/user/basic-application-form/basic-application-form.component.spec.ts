import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicApplicationFormComponent } from './basic-application-form.component';

describe('BasicApplicationFormComponent', () => {
  let component: BasicApplicationFormComponent;
  let fixture: ComponentFixture<BasicApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicApplicationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
