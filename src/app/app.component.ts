import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scratch-library-service';

  constructor(
    private myLibService: MyLibService,
  ) {}

  ngOnInit() {
    this.myLibService.map.set('test', 'test val');
  }

}
