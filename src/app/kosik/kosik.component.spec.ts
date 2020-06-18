import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosikComponent } from './kosik.component';

describe('KosikComponent', () => {
  let component: KosikComponent;
  let fixture: ComponentFixture<KosikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
