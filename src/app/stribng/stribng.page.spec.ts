import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StribngPage } from './stribng.page';

describe('StribngPage', () => {
  let component: StribngPage;
  let fixture: ComponentFixture<StribngPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StribngPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StribngPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
