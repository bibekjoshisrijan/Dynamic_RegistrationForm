import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-otherexpander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit {
  @Input('userdata') userdata:Object[];
  constructor() { }

  ngOnInit() {

  }

}
