import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { MemberEditCustComponent } from '../../../membership-cust/base/member/member-edit.cust.component';
import { ViewType } from '../member.component';
import { MemberService } from '../member.service';



import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[membershipMemberDirectiveEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: MembershipMemberDirectiveEmail, multi: true}]
})
export class MembershipMemberDirectiveEmail implements Validator {
  validators:any[] = [
      
         {validator: function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
},
          msg: `Please fill a valid email address.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'membershipMemberDirectiveEmail': obj.msg };
            } catch (e) {
                return { 'membershipMemberDirectiveEmail': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[membershipMemberDirectivePhone]',
  providers: [{provide: NG_VALIDATORS, useExisting: MembershipMemberDirectivePhone, multi: true}]
})
export class MembershipMemberDirectivePhone implements Validator {
  validators:any[] = [
      
         {validator: function(phone) {
    var re = /^(\d+-?)+\d+$/;
    return re.test(phone)
},
          msg: `Please fill a valid phone number.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'membershipMemberDirectivePhone': obj.msg };
            } catch (e) {
                return { 'membershipMemberDirectivePhone': obj.msg };
            }
        }
    }
    return null;
  }
}





@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent extends MemberEditCustComponent implements OnInit, AfterViewInit {        
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
      public memberService: MemberService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                memberService, injector, router, route, location, ViewType.EDIT);

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
