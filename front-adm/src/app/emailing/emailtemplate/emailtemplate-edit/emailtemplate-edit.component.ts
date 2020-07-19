import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  Directive,
  EventEmitter
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
declare const $: any;
import {
  EmailtemplateEditCustComponent
} from '../../../emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component';
import {
  ViewType
} from '../emailtemplate.component';
import {
  EmailtemplateService
} from '../emailtemplate.service';
@Component({
  selector: 'app-emailtemplate-edit',
  templateUrl: './emailtemplate-edit.component.html',
  styleUrls: ['./emailtemplate-edit.component.css']
})
export class EmailtemplateEditComponent extends EmailtemplateEditCustComponent implements OnInit, AfterViewInit {
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
  public minDate = {
    year: (new Date()).getFullYear() - 100,
    month: 1,
    day: 1
  };
  constructor(public emailtemplateService: EmailtemplateService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailtemplateService, injector, router, route, location);
    this.view = ViewType.EDIT;
    this.fieldDisplayNames = {
      'templateName': 'Template Name',
      'fromEmail': 'From Email',
      'subject': 'Subject',
      'content': 'Content',
      'tag': 'Tag',
    };
    this.stringFields.push('templateName');
    this.stringFields.push('fromEmail');
    this.stringFields.push('subject');
    this.stringFields.push('content');
    this.stringFields.push('tag');
    const detail = {};
    this.detail = this.formatDetail(detail);
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.embedMode == 'create') { // parent ask to create
      this.action = 'Create';
      this.getDetailData();
    } else {
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.action = 'Edit';
        this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
      } else {
        this.action = 'Create';
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
      this.action = 'Add';
      let detail = {};
      for (let prop of Object.keys(this.initData)) {
        detail[prop] = this.initData[prop];
        this.hiddenFields.push(prop);
      }
      this.detail = this.formatDetail(detail);
    } else {
      let detail = {};
      this.detail = this.formatDetail(detail);
    }
  }
}