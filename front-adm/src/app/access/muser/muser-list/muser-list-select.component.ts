import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  AfterViewInit
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
  MuserListComponent
} from './muser-list.component';
import {
  MuserService
} from '../muser.service';
@Component({
  selector: 'app-muser-list-select',
  templateUrl: './muser-list-select.component.html',
  styleUrls: ['./muser-list.component.css']
})
export class MuserListSelectComponent extends MuserListComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public muserService: MuserService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(muserService, injector, router, route, location);
    this.majorUi = false;
    this.itemMultiSelect = false;
  }
  ngOnInit() {
    this.selectedId = this.inputData;
    this.populateList();
  }
}