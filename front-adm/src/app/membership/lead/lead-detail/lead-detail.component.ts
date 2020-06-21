import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { LeadDetailCustComponent } from '../../../membership-cust/base/lead/lead-detail.cust.component';
import { ViewType } from '../lead.component';
import { LeadService } from '../lead.service';




@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css']
})
export class LeadDetailComponent extends LeadDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public leadService: LeadService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                leadService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'name': 'Name',
            'title': 'Title',
            'photo': 'Photo',
            'email': 'Email',
            'order': 'Order',
          };
          this.stringFields.push('name');
          this.stringFields.push('title');
          this.stringFields.push('photo');
          this.stringFields.push('email');
          this.numberFields = ['order', ];
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
