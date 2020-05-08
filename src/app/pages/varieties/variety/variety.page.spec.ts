import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VarietyPage } from './variety.page';

describe('VarietyPage', () => {
  let component: VarietyPage;
  let fixture: ComponentFixture<VarietyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarietyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VarietyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
