import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { AdditionalinfoEditCustComponent } from '../../../membership-cust/base/additionalinfo/additionalinfo-edit.cust.component';
import { ViewType } from '../additionalinfo.component';
import { AdditionalinfoService } from '../additionalinfo.service';





import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-additionalinfo-edit',
  templateUrl: './additionalinfo-edit.component.html',
  styleUrls: ['./additionalinfo-edit.component.css']
})
export class AdditionalinfoEditComponent extends AdditionalinfoEditCustComponent implements OnInit, AfterViewInit {        
    // @Input() 
    // public id: string;
    // @Input()
    // public cid: string; // copy id
    // @Input()
    // public initData: any; // some fields has data already. eg: {a: b}. Used for add
    // @Output()
    // public doneData = new EventEmitter<boolean>();
    // @Output()
    // public done = new EventEmitter<any>();
    // @Input()
    // public embeddedView: boolean;
    // @Input()
    // public embedMode: string; // parent to tell the action - create

    public action: string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public additionalinfoService: AdditionalinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                additionalinfoService, injector, router, route, location);
          this.view = ViewType.EDIT;

          this.fieldDisplayNames = {
            'grade': 'Grade',
            'team': 'Team',
            'guardianEmail': 'Guardian Email',
            'programmingSkill': 'Programming Skill',
            'designingSkill': 'Designing Skill',
            'githubExp': 'Github Exp',
            'member': 'Member',
          };
          this.enums['grade'] = [
            '8',
            '9',
            '10',
            '11',
            '12',
            'other',
          ];
          this.enums['team'] = [
            'Web Development',
            'UI Design',
          ];
          this.enums['programmingSkill'] = [
            '1',
            '2',
            '3',
            '4',
            '5',
          ];
          this.enums['designingSkill'] = [
            '1',
            '2',
            '3',
            '4',
            '5',
          ];
          this.enums['githubExp'] = [
            'No',
            'Yes, web access only',
            'Yes, web and git access',
          ];
          this.stringFields.push('grade');
          this.stringFields.push('team');
          this.stringFields.push('guardianEmail');
          this.stringFields.push('programmingSkill');
          this.stringFields.push('designingSkill');
          this.stringFields.push('githubExp');
          this.referenceFields = [
            'member',
          ];

          
          const detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
      super.ngOnInit();
      if (this.embedMode == 'create') { // parent ask to create
        this.action='Create';
        this.getDetailData();
      } else {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action='Edit';
            this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
        }
        else {
            this.action='Create';
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else {
              this.getDetailData();
            }
        }
      }
      // get editHintFields
      this.searchHintFieldValues();
    }

    ngAfterViewInit() {
      // Initialize all tooltips
      $('[data-toggle="tooltip"]').tooltip();
    }

    getDetailData() {
      if (this.initData) {
        this.action='Add';
        let detail = {
        };
        for (let prop of Object.keys(this.initData)) {
            detail[prop] = this.initData[prop];
            this.hiddenFields.push(prop);
        }
        this.detail = this.formatDetail(detail);
      } else {
          let detail = {
          };
          this.detail = this.formatDetail(detail);
      }
    }
}
