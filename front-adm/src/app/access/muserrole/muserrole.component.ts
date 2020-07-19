import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  MddsBaseComponent,
  ViewType
} from '@hicoder/angular-core';
import {
  Component,
  OnInit,
  Injector,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MuserroleService
} from './muserrole.service';
const itemCamelName = 'user Role';
export {
  ViewType
};
import {
  ViewChild
} from '@angular/core';
import {
  ComponentFactoryResolver
} from '@angular/core';
import {
  AccessRefSelectDirective
} from '../access.component';
import {
  MuserDetailSelComponent
} from '../muser/muser-detail/muser-detail-sel.component';
import {
  MuserDetailPopComponent
} from '../muser/muser-detail/muser-detail-pop.component';
import {
  MuserListSelectComponent
} from '../muser/muser-list/muser-list-select.component';
import {
  MpubroleDetailSelComponent
} from '../mpubrole/mpubrole-detail/mpubrole-detail-sel.component';
import {
  MpubroleDetailPopComponent
} from '../mpubrole/mpubrole-detail/mpubrole-detail-pop.component';
import {
  MpubroleListSelectComponent
} from '../mpubrole/mpubrole-list/mpubrole-list-select.component';
@Component({
  template: '',
})
export class MuserroleComponent extends MddsBaseComponent implements OnInit {
  // *** common input fields
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions
  @Input()
  public searchObj: any;
  // *** list component
  @Input()
  public inputData: any;
  @Input()
  public queryParams: any; // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  @Input()
  public categoryBy: string; //field name whose value is used as category
  // list-asso component
  @Input('asso') public associationField: string;
  // list select component
  @Output() outputData: any;
  // *** edit / create component
  @Input()
  public id: string;
  @Input()
  public cid: string; // copy id
  @Input()
  public initData: any; // some fields has data already. eg: {a: b}. Used for add
  @Input()
  public embeddedView: boolean;
  @Input()
  public embedMode: string; // parent to tell the action - create
  @Output()
  public doneData = new EventEmitter < boolean > ();
  @Output()
  public done = new EventEmitter < any > ();
  // *** detail component
  // @Input() 
  // public id:string;
  @Input()
  public disableActionButtions: boolean;
  @Output()
  public eventEmitter: EventEmitter < any > = new EventEmitter();
  // detail sub component
  // @Input() inputData;
  // detail show field component
  // @Input() id: string;
  @Input() detailObj: any;
  @Input() showFieldsStr: string;
  // detail sel component
  //@Input() inputData;
  //@Output() outputData;
  // detail pop component
  // @Input() inputData;
  // @Output() outputData;
  public selectComponents = {
    'account': {
      'select-type': MuserListSelectComponent,
      'select-detail-type': MuserDetailSelComponent,
      'pop-detail-type': MuserDetailPopComponent,
      'componentRef': null
    },
    'role': {
      'select-type': MpubroleListSelectComponent,
      'select-detail-type': MpubroleDetailSelComponent,
      'pop-detail-type': MpubroleDetailPopComponent,
      'componentRef': null
    },
  }
  @ViewChild(AccessRefSelectDirective, {
    static: true
  }) refSelectDirective: AccessRefSelectDirective;
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public muserroleService: MuserroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserroleService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [];
    this.briefFieldsInfo.push(['account', 'Account']);
    this.briefFieldsInfo.push(['role', 'Role']);
    this.referenceFieldsMap = {
      'account': 'muser',
    };
    this.referenceFieldsReverseMap = {
      'muser': 'account',
    };
    this.requiredFields = ['account', ];
    this.schemaName = 'muserrole';
    this.modulePath = 'access';
    this.indexFields = ['account', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}