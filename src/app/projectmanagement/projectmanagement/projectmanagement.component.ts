import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'baconcha-projectmanagement',
  templateUrl: './projectmanagement.component.html',
  styleUrls: ['./projectmanagement.component.scss'],
  animations: [routerTransition]
})
export class ProjectmanagementComponent implements OnInit {
  examples = [
    { link: 'project', label: 'Project' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
