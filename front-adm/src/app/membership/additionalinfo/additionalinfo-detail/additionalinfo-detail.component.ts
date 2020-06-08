import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { AdditionalinfoDetailCustComponent } from '../../../membership-cust/base/additionalinfo/additionalinfo-detail.cust.component';
import { ViewType } from '../additionalinfo.component';
import { AdditionalinfoService } from '../additionalinfo.service';


import { ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-additionalinfo-detail',
  templateUrl: './additionalinfo-detail.component.html',
  styleUrls: ['./additionalinfo-detail.component.css']
})
export class AdditionalinfoDetailComponent extends AdditionalinfoDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public additionalinfoService: AdditionalinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(componentFactoryResolver,
                additionalinfoService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'member': 'Member',
            'grade': 'Grade',
            'team': 'Team',
            'guardianEmail': 'Guardian Email',
            'programmingSkill': 'Programming Skill',
            'designingSkill': 'Designing Skill',
            'githubExp': 'Github Exp',
          };

          this.enums['grade'] = ['8', '9', '10', '11', '12', 'other', ];
          this.enums['team'] = ['Web Development', 'UI Design', ];
          this.enums['programmingSkill'] = ['1', '2', '3', '4', '5', ];
          this.enums['designingSkill'] = ['1', '2', '3', '4', '5', ];
          this.enums['githubExp'] = ['No', 'Yes, web access only', 'Yes, web and git access', ];

          this.stringFields.push('grade');
          this.stringFields.push('team');
          this.stringFields.push('guardianEmail');
          this.stringFields.push('programmingSkill');
          this.stringFields.push('designingSkill');
          this.stringFields.push('githubExp');

          this.referenceFields = ['member', ];









  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
