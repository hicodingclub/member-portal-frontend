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
  MpubmoduleListCustComponent
} from '../../../access-cust/base/mpubmodule/mpubmodule-list.cust.component';
import {
  ViewType
} from '../mpubmodule.component';
import {
  MpubmoduleService
} from '../mpubmodule.service';
@Component({
  selector: 'app-mpubmodule-list',
  templateUrl: './mpubmodule-list.component.html',
  styleUrls: ['./mpubmodule-list.component.css']
})
export class MpubmoduleListComponent extends MpubmoduleListCustComponent implements OnInit {
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
  constructor(public mpubmoduleService: MpubmoduleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubmoduleService, injector, router, route, location);
    this.view = ViewType.LIST;
    this.fieldDisplayNames = {
      'module': 'Module',
      'resources': 'Resources',
    };
    this.stringFields.push('module');
    this.arrayFields = [
      ['resources', 'SchemaString'],
    ];
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
    return new MpubmoduleListComponent(null, null, null, null, null);
  }
}