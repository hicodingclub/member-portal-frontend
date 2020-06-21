import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { MemberDetailCustComponent } from '../../../membership-cust/base/member/member-detail.cust.component';
import { ViewType } from '../member.component';
import { MemberService } from '../member.service';




@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent extends MemberDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



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

    //Load first reference, if not others activated
    if (!this.options['disableRefLink'] && !this.isChildRouterActivated()) {
      this.router.navigate(['./additionalinfo/list', {}], {relativeTo: this.route, queryParamsHandling: 'preserve',});
    }
  }
}
