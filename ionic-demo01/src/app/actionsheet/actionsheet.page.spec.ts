import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionsheetPage } from './actionsheet.page';

describe('ActionsheetPage', () => {
  let component: ActionsheetPage;
  let fixture: ComponentFixture<ActionsheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
