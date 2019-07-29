import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bexpander',
  templateUrl: './bexpander.component.html',
  styleUrls: ['./bexpander.component.css']
})
export class BexpanderComponent implements OnInit {
  @Input('userdata') userdata:Object[];

  constructor() { }

  ngOnInit() {
  }

}
