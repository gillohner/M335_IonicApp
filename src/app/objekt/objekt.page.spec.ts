import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjektPage } from './objekt.page';

describe('ObjektPage', () => {
  let component: ObjektPage;
  let fixture: ComponentFixture<ObjektPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjektPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjektPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
