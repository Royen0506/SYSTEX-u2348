import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
  ]
})
export class ProjectComponent implements OnInit {

  data: any;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params?.['data']) {
        this.data = params?.['data'];
        return;
      }
    });
  }


  ngOnInit(): void {
  }

}
