import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategory1Component } from './product-category1.component';

describe('ProductCategory1Component', () => {
  let component: ProductCategory1Component;
  let fixture: ComponentFixture<ProductCategory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategory1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
