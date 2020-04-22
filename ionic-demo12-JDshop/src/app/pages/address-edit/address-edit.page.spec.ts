import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressEditPage } from './address-edit.page';

describe('AddressEditPage', () => {
  let component: AddressEditPage;
  let fixture: ComponentFixture<AddressEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
