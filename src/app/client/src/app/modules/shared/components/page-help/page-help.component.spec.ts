import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHelpComponent } from './page-help.component';
import { ResourceService } from '../../services/index';
import { SuiModule } from 'ng2-semantic-ui-v9';
describe('PageHelpComponent', () => {
  let component: PageHelpComponent;
  let fixture: ComponentFixture<PageHelpComponent>;
  const resourceBundle = {
    frmelmnts : {
      lbl: { needHelp: 'Need help', knowMore: 'Know more'}
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SuiModule],
      declarations: [ PageHelpComponent ],
      providers: [{ provide: ResourceService, useValue: resourceBundle }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHelpComponent);
    component = fixture.componentInstance;
    component.helpSectionConfig =  {
      'url': 'https://dock.preprod.ntp.net.in/help/contribute/administrator/manage-users/index.html',
      'header': 'Inviting users will allow you to assign them roles for projects',
      'message':  'You can invite users to your organization by clicking on Invite Users and sharing an invitation link with them'
    };
    component.popupPlacement = 'bottom left';
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
