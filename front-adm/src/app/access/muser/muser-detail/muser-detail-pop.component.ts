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
  MuserDetailComponent
} from './muser-detail.component';
import {
  MuserService
} from '../muser.service';
@Component({
  selector: 'app-muser-detail-pop',
  templateUrl: './muser-detail-pop.component.html',
  styleUrls: ['./muser-detail.component.css']
})
export class MuserDetailPopComponent extends MuserDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public muserService: MuserService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}