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
  MemberService
} from './member.service';
const itemCamelName = 'member';
export {
  ViewType
};
import {
  ViewChild
} from '@angular/core';
import {
  ElementRef
} from '@angular/core';
@Component({
  template: '',
})
export class MemberComponent extends MddsBaseComponent implements OnInit {
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
  @ViewChild('MembershipModal', {
    static: true
  }) public focusEl: ElementRef;
  constructor(public memberService: MemberService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(memberService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [];
    this.briefFieldsInfo.push(['firstname', 'Firstname']);
    this.briefFieldsInfo.push(['lastname', 'Lastname']);
    this.briefFieldsInfo.push(['photo', 'Photo']);
    this.briefFieldsInfo.push(['email', 'Email']);
    this.briefFieldsInfo.push(['phone', 'Phone']);
    this.requiredFields = ['email', ];
    this.emailFields = [
      ['Email', 'email'],
    ];
    this.schemaName = 'member';
    this.modulePath = 'membership';
    this.indexFields = ['firstname', 'lastname', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}