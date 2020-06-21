import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { BoardDetailCustComponent } from '../../../membership-cust/base/board/board-detail.cust.component';
import { ViewType } from '../board.component';
import { BoardService } from '../board.service';




@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent extends BoardDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public boardService: BoardService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                boardService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'name': 'Name',
            'title': 'Title',
            'photo': 'Photo',
            'email': 'Email',
            'order': 'Order',
          };
          this.stringFields.push('name');
          this.stringFields.push('title');
          this.stringFields.push('photo');
          this.stringFields.push('email');
          this.numberFields = ['order', ];
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
