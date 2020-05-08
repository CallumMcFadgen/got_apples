import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrowerPage } from './grower.page';

describe('GrowerPage', () => {
  let component: GrowerPage;
  let fixture: ComponentFixture<GrowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
