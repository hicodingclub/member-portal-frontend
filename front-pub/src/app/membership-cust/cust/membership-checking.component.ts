import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { AdditionalinfoService } from '../../membership/additionalinfo/additionalinfo.service';

@Component({
  selector: 'app-membership-checking',
  templateUrl: './membership-checking.component.html',
  styleUrls: ['./membership-checking.component.css']
})
export class MembershipCheckingComponent implements OnInit, AfterViewInit {
    public loading: boolean = true;
    public missingInfo: boolean = false;
    public leftSeconds: number = 10;

  constructor(
      public additionalinfoService: AdditionalinfoService,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          this.additionalinfoService.getListWithCondition(1, 1).subscribe(result => {
              this.loading = false;
              if(result.items.length > 0){
                  this.router.navigate(['/']);
              } else {
                  this.missingInfo = true;
                  setTimeout(() => {
                      this.router.navigateByUrl('/membership/additionalinfo/new');
                  }, 10000);
                  setInterval(() => {
                      this.leftSeconds -= 1;
                  }, 1000);
              }
          }, 
          error => {
            this.loading = false;
            console.log(error);
            this.router.navigate(['/']);
        });
      }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  goNow(){
    this.router.navigateByUrl('/membership/additionalinfo/new');
  }

}
