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
  AdditionalinfoDetailComponent
} from './additionalinfo-detail.component';
import {
  AdditionalinfoService
} from '../additionalinfo.service';
@Component({
  selector: 'app-additionalinfo-detail-sub',
  templateUrl: './additionalinfo-detail-sub.component.html',
  styleUrls: ['./additionalinfo-detail.component.css']
})
export class AdditionalinfoDetailSubComponent extends AdditionalinfoDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public additionalinfoService: AdditionalinfoService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(null, additionalinfoService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}