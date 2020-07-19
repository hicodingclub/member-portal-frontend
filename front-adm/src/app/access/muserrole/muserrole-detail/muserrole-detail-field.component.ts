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
  MuserroleComponent,
  ViewType
} from '../muserrole.component';
import {
  MuserroleService
} from '../muserrole.service';
@Component({
  selector: 'app-muserrole-detail-field',
  templateUrl: './muserrole-detail-field.component.html',
  styleUrls: ['./muserrole-detail.component.css']
})
export class MuserroleDetailFieldComponent extends MuserroleComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public muserroleService: MuserroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, muserroleService, injector, router, route, location);
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
    if (!this.showFieldsStr) {
      console.error("A field has to be given to show it.");
      return;
    }
    this.showFields = this.showFieldsStr.match(/\S+/g);
    if (this.detailObj) {
      this.onDetailReturned(this.detailObj, null);
    } else {
      if (!this.id) this.id = this.id;
      if (this.id) this.populateDetail(this.id);
      else {
        console.error("No id provided to show info");
        return;
      }
    }
  }
}