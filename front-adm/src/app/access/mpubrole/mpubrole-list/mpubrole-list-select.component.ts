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
  MpubroleListComponent
} from './mpubrole-list.component';
import {
  MpubroleService
} from '../mpubrole.service';
@Component({
  selector: 'app-mpubrole-list-select',
  templateUrl: './mpubrole-list-select.component.html',
  styleUrls: ['./mpubrole-list.component.css']
})
export class MpubroleListSelectComponent extends MpubroleListComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public mpubroleService: MpubroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubroleService, injector, router, route, location);
    this.majorUi = false;
    this.itemMultiSelect = false;
  }
  ngOnInit() {
    this.selectedId = this.inputData;
    this.populateList();
  }
}