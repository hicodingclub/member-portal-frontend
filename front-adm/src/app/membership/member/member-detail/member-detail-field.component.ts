import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MemberComponent, ViewType } from '../member.component';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail-field',
  templateUrl: './member-detail-field.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailFieldComponent extends MemberComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public memberService: MemberService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                memberService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'firstname': 'Firstname',
            'lastname': 'Lastname',
            'photo': 'Photo',
            'email': 'Email',
            'phone': 'Phone',
          };


          this.stringFields.push('firstname');
          this.stringFields.push('lastname');
          this.stringFields.push('photo');
          this.stringFields.push('email');
          this.stringFields.push('phone');










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
