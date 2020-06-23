import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor(
    private myLibService: MyLibService,
  ) { }

  ngOnInit(): void {
    console.log(this.myLibService.map.get('test'));
  }

}
