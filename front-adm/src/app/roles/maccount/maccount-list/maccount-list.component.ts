import {
  Component,
  OnInit,
  Input
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
import {
  MaccountListCustComponent
} from '../../../roles-cust/base/maccount/maccount-list.cust.component';
import {
  ViewType
} from '../maccount.component';
import {
  MaccountService
} from '../maccount.service';
@Component({
  selector: 'app-maccount-list',
  templateUrl: './maccount-list.component.html',
  styleUrls: ['./maccount-list.component.css']
})
export class MaccountListComponent extends MaccountListCustComponent implements OnInit {
  public minDate = {
    year: (new Date()).getFullYear() - 100,
    month: 1,
    day: 1
  };
  // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
  //                        disableListSearch: false, disableTitle: false, disableRefs: false
  //                        disableListHead: false, disableTitleRow: false}
  // @Input()
  // public inputData:any;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  // @Input()
  // public categoryBy:string; //field name whose value is used as category
  constructor(public maccountService: MaccountService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountService, injector, router, route, location);
    this.view = ViewType.LIST;
    this.fieldDisplayNames = {
      'username': 'Username',
      'email': 'Email',
      'phone': 'Phone',
      'firstname': 'Firstname',
      'lastname': 'Lastname',
      'since': 'Since',
      'regtype': 'Regtype',
      'status': 'Status',
    };
    this.enums['status'] = ['Enabled', 'Disabled', 'Pending', ];
    this.stringFields.push('username');
    this.stringFields.push('email');
    this.stringFields.push('phone');
    this.stringFields.push('firstname');
    this.stringFields.push('lastname');
    this.stringFields.push('regtype');
    this.stringFields.push('status');
    this.dateFields = ['since', ];
    this.listViewFilter = 'table';
    const listCategories = [];
    this.listCategory1 = listCategories[0] || {};
    this.listCategory2 = listCategories[1] || {};
    this.clickItemAction = 'detail';
    this.itemMultiSelect = true;
    // initialize detail structure for search
    let detail = {};
    this.detail = this.formatDetail(detail);
  }
  ngOnInit() {
    super.ngOnInit();
    this.adjustListViewForWindowSize();
    this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
    this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;
    if (!this.options) {
      this.options = {};
    }
    if (this.options.disableCatetory) {
      this.listCategory1 = {}; // no do query based on category for home view;
      this.listCategory2 = {}; // no do query based on category for home view;
    }
    // this is to initialize the detail that will be used for search condition selection
    let detail = {};
    if (this.searchObj) {
      this.searchDetailReady = true; // search provided from "detail", not from search bar.
      detail = this.searchObj;
    }
    if (this.queryParams) {
      this.listSortField = this.queryParams.listSortField;
      this.listSortOrder = this.queryParams.listSortOrder;
      if (this.queryParams.perPage) {
        this.perPage = this.queryParams.perPage
      }
    }
    this.detail = this.formatDetail(detail);
    this.searchList();
    // get editHintFields
    this.searchHintFieldValues();
  }
  static getInstance() {
    //used by others to call some common functions
    return new MaccountListComponent(null, null, null, null, null);
  }
}