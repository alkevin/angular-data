import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  yearNow: string;

  @Input()
  appVersion: string;

  constructor() {}

  ngOnInit() {
    this.yearNow = new Date().getFullYear().toString();
  }
}
