import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.scss']
})
export class DirectivePageComponent implements OnInit {
  users: any[] = [];
  color: string = 'green'

  constructor() { }

  ngOnInit(): void {
    this.users = [
      { name: 'ajay chaurasiya'},
      { name: 'pankaj rawat'},
      { name: 'neeraj singh'},
      { name: 'jyoti patel'},
      { name: 'agrima agarwal'},
      { name: 'neha pal'},
      { name: 'amit singh'},
      { name: 'namit srivastav'},
      { name: 'shalesh chaudhary'},
      { name: 'abhishek ray'},
      { name: 'vishal sonkar'},
      { name: 'vivek singh'},
    ]
  }

}
