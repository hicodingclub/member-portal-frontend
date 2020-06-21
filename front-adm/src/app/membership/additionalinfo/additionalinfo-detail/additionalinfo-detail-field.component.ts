import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { AdditionalinfoComponent, ViewType } from '../additionalinfo.component';
import { AdditionalinfoService } from '../additionalinfo.service';

@Component({
  selector: 'app-additionalinfo-detail-field',
  templateUrl: './additionalinfo-detail-field.component.html',
  styleUrls: ['./additionalinfo-detail.component.css']
})
export class AdditionalinfoDetailFieldComponent extends AdditionalinfoComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public additionalinfoService: AdditionalinfoService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
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
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}
