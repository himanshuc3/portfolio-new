import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  blogs: any = [
    {
      title: 'The import on Interaction pattern and some garbage to test line height',
      date: 'Dec 09, 2020'
    },
    {
      title: 'The import on Interaction pattern',
      date: 'Dec 09, 2020'
    },
    {
      title: 'The import on Interaction pattern',
      date: 'Dec 09, 2020'
    },{
      title: 'The import on Interaction pattern',
      date: 'Dec 09, 2020'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
