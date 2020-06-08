import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { AdditionalinfoService } from './additionalinfo.service';

const itemCamelName = 'additionalInfo';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { MembershipRefSelectDirective } from '../membership.component';

import { MemberDetailSelComponent } from '../member/member-detail/member-detail-sel.component';
import { MemberDetailPopComponent } from '../member/member-detail/member-detail-pop.component';
import { MemberListSelectComponent } from '../member/member-list/member-list-select.component';


export class AdditionalinfoComponent extends MddsBaseComponent implements OnInit {
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
    public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
    @Input()
    public categoryBy:string; //field name whose value is used as category

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
    public doneData = new EventEmitter<boolean>();
    @Output()
    public done = new EventEmitter<any>();

    // *** detail component
    // @Input() 
    // public id:string;
    @Input()
    public disableActionButtions:boolean;
    @Output()
    public eventEmitter: EventEmitter<any> = new EventEmitter();

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

      'member': {
          'select-type': MemberListSelectComponent,
          'select-detail-type': MemberDetailSelComponent,
          'pop-detail-type': MemberDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(MembershipRefSelectDirective, {static: true}) refSelectDirective: MembershipRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public additionalinfoService: AdditionalinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(additionalinfoService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['member', 'Member']);this.briefFieldsInfo.push(['grade', 'Grade']);this.briefFieldsInfo.push(['team', 'Team']);



        this.referenceFieldsMap = {'member': 'member',};
        this.referenceFieldsReverseMap = {'member': 'member',};
        this.emailFields = [['Guardian Email','guardianEmail'],];
        this.requiredFields = ['grade','team','programmingSkill','designingSkill','githubExp',];


        this.schemaName = 'additionalinfo';
        
        this.modulePath = 'membership';
        this.indexFields = ['grade', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
