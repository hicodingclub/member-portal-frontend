import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { MemberListComponent } from './member-list.component';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list-select',
  templateUrl: './member-list-select.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListSelectComponent extends MemberListComponent
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public memberService: MemberService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(memberService, injector, router, route, location);
            this.majorUi = false;
            this.itemMultiSelect = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
