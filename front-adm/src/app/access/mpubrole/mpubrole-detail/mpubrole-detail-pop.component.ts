import {
  Component,
  OnInit,
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
  MpubroleDetailComponent
} from './mpubrole-detail.component';
import {
  MpubroleService
} from '../mpubrole.service';
@Component({
  selector: 'app-mpubrole-detail-pop',
  templateUrl: './mpubrole-detail-pop.component.html',
  styleUrls: ['./mpubrole-detail.component.css']
})
export class MpubroleDetailPopComponent extends MpubroleDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public mpubroleService: MpubroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubroleService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}