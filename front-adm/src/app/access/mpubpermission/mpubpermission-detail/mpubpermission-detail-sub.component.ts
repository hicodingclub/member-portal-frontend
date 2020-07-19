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
  MpubpermissionDetailComponent
} from './mpubpermission-detail.component';
import {
  MpubpermissionService
} from '../mpubpermission.service';
@Component({
  selector: 'app-mpubpermission-detail-sub',
  templateUrl: './mpubpermission-detail-sub.component.html',
  styleUrls: ['./mpubpermission-detail.component.css']
})
export class MpubpermissionDetailSubComponent extends MpubpermissionDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public mpubpermissionService: MpubpermissionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, mpubpermissionService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}