import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrowersPage } from './growers.page';

describe('GrowersPage', () => {
  let component: GrowersPage;
  let fixture: ComponentFixture<GrowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
