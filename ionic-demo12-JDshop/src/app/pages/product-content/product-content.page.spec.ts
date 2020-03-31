import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductContentPage } from './product-content.page';

describe('ProductContentPage', () => {
  let component: ProductContentPage;
  let fixture: ComponentFixture<ProductContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
