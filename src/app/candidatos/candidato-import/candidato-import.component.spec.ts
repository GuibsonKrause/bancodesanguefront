import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoImportComponent } from './candidato-import.component';

describe('CandidatoImportComponent', () => {
  let component: CandidatoImportComponent;
  let fixture: ComponentFixture<CandidatoImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatoImportComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
