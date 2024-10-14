import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jest-preset-angular/setup-jest';
import { QuadrinhosComponent } from './quadrinhos.component';

describe('QuadrinhosComponent', () => {
  let component: QuadrinhosComponent;
  let fixture: ComponentFixture<QuadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuadrinhosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
