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
  MpubpermissionComponent,
  ViewType
} from '../mpubpermission.component';
import {
  MpubpermissionService
} from '../mpubpermission.service';
@Component({
  selector: 'app-mpubpermission-detail-field',
  templateUrl: './mpubpermission-detail-field.component.html',
  styleUrls: ['./mpubpermission-detail.component.css']
})
export class MpubpermissionDetailFieldComponent extends MpubpermissionComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public mpubpermissionService: MpubpermissionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, mpubpermissionService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'role': 'Role',
      'module': 'Module',
      'modulePermission': 'Module Permission',
      'resourcePermission': 'Resource Permission',
    };
    this.stringFields.push('modulePermission');
    this.referenceFields = ['role', 'module', ];
    this.mapFields = [
      ['resourcePermission', 'SchemaString', '', '', , ''],
    ];
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