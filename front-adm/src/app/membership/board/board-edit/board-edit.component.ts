import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { BoardEditCustComponent } from '../../../membership-cust/base/board/board-edit.cust.component';
import { ViewType } from '../board.component';
import { BoardService } from '../board.service';



import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[membershipBoardDirectiveEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: MembershipBoardDirectiveEmail, multi: true}]
})
export class MembershipBoardDirectiveEmail implements Validator {
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
                if (result == false ) return { 'membershipBoardDirectiveEmail': obj.msg };
            } catch (e) {
                return { 'membershipBoardDirectiveEmail': obj.msg };
            }
        }
    }
    return null;
  }
}





@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css']
})
export class BoardEditComponent extends BoardEditCustComponent implements OnInit, AfterViewInit {        
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
      public boardService: BoardService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                boardService, injector, router, route, location, ViewType.EDIT);

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
