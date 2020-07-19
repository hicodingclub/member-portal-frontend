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
  MpubroleComponent,
  ViewType
} from '../mpubrole.component';
import {
  MpubroleService
} from '../mpubrole.service';
@Component({
  selector: 'app-mpubrole-detail-field',
  templateUrl: './mpubrole-detail-field.component.html',
  styleUrls: ['./mpubrole-detail.component.css']
})
export class MpubroleDetailFieldComponent extends MpubroleComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public mpubroleService: MpubroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubroleService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'role': 'Role',
      'description': 'Description',
    };
    this.stringFields.push('role');
    this.stringFields.push('description');
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