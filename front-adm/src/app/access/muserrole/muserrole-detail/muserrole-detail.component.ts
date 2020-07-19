import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
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
import {
  MuserroleDetailCustComponent
} from '../../../access-cust/base/muserrole/muserrole-detail.cust.component';
import {
  ViewType
} from '../muserrole.component';
import {
  MuserroleService
} from '../muserrole.service';
import {
  ComponentFactoryResolver
} from '@angular/core';
@Component({
  selector: 'app-muserrole-detail',
  templateUrl: './muserrole-detail.component.html',
  styleUrls: ['./muserrole-detail.component.css']
})
export class MuserroleDetailComponent extends MuserroleDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public muserroleService: MuserroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(componentFactoryResolver, muserroleService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'account': 'Account',
      'role': 'Role',
    };
    this.referenceFields = ['account', ];
    this.arrayFields = [
      ['role', 'ObjectId'],
    ];
    this.referenceFieldsMap['role'] = 'mpubrole';
    this.referenceFieldsReverseMap['mpubrole'] = 'role';
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
  ngAfterViewInit() {}
}