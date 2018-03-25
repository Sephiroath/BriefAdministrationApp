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
    { link: 'projects', label: 'Proyectos' },
    { link: 'events', label: 'Eventos' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
