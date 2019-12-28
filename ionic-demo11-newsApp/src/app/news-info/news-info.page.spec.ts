import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsInfoPage } from './news-info.page';

describe('NewsInfoPage', () => {
  let component: NewsInfoPage;
  let fixture: ComponentFixture<NewsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
