import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod03LibComponent } from './mod03-lib.component';

describe('Mod03LibComponent', () => {
  let component: Mod03LibComponent;
  let fixture: ComponentFixture<Mod03LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod03LibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod03LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
