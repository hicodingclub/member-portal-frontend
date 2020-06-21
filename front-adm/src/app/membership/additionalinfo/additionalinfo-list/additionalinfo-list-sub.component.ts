import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { AdditionalinfoListComponent } from './additionalinfo-list.component';
import { AdditionalinfoService } from '../additionalinfo.service';

@Component({
  selector: 'app-additionalinfo-list-sub',
  templateUrl: './additionalinfo-list-sub.component.html',
  styleUrls: ['./additionalinfo-list.component.css']
})
export class AdditionalinfoListSubComponent extends AdditionalinfoListComponent implements OnInit {
  public parentSchema;
  public parentItemId;

  constructor(
      public additionalinfoService: AdditionalinfoService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
        super(null, additionalinfoService, injector, router, route, location);

        this.listCategory1 = {}; // no do query based on category for sub view;
        this.listCategory2 = {}; // no do query based on category for sub view;
  }

  ngOnInit() {
      this.clickItemAction = ''; // don't go to details or select by clicking the card/row.
      this.adjustListViewForWindowSize();

      let ref = this.getParentRouteRefField();
      this.parentSchema = this.referenceFieldsReverseMap[ref];

      this.parentItemId = this.getParentRouteItemId();
      let id = this.parentItemId;

      this.detail = {};

      this.parentData = {};
      if (this.arrayFields.some(x=>x[0] == ref)) {
          this.parentData[ref] = {'selection':[{'_id': id}] }; 
          this.detail[ref] = {'selection':[{'_id': id}] }; //search on array list
      } else {
          this.parentData[ref] = {'_id': id };
          this.detail[ref] = {'_id': id }; //make this as the search context
      }
      this.searchList();
  }
}
