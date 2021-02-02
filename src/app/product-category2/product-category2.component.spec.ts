import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategory2Component } from './product-category2.component';

describe('ProductCategory2Component', () => {
  let component: ProductCategory2Component;
  let fixture: ComponentFixture<ProductCategory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategory2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
