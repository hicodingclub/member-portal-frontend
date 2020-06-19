import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { BoardComponent, ViewType } from '../board.component';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-detail-field',
  templateUrl: './board-detail-field.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailFieldComponent extends BoardComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
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
