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
  MuserroleListComponent
} from './muserrole-list.component';
import {
  MuserroleService
} from '../muserrole.service';
@Component({
  selector: 'app-muserrole-list-sub',
  templateUrl: './muserrole-list-sub.component.html',
  styleUrls: ['./muserrole-list.component.css']
})
export class MuserroleListSubComponent extends MuserroleListComponent implements OnInit {
  public parentSchema;
  public parentItemId;
  constructor(public muserroleService: MuserroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, muserroleService, injector, router, route, location);
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
    if (this.arrayFields.some(x => x[0] == ref)) {
      this.parentData[ref] = {
        'selection': [{
          '_id': id
        }]
      };
      this.detail[ref] = {
        'selection': [{
          '_id': id
        }]
      }; //search on array list
    } else {
      this.parentData[ref] = {
        '_id': id
      };
      this.detail[ref] = {
        '_id': id
      }; //make this as the search context
    }
    this.searchList();
  }
}