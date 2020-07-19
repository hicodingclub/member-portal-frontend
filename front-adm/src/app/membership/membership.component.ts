import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewContainerRef,
  Directive
} from '@angular/core';
@Directive({
  selector: '[membership-ref-select]',
})
export class MembershipRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
})
export class MembershipComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}