import {Component, OnInit, ViewEncapsulation, AfterViewChecked} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';

import {HighlightService} from '../components/syntaxHighlighting/highlight.service'


declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit, AfterViewChecked {

   posts$: Observable<ScullyRoute[]>;
   search?: string = '';
   filteredPosts$:Observable<ScullyRoute[]>;
   private highlightService: HighlightService

  constructor(private scully: ScullyRoutesService) {
  }

  onSearchChange(event: any): void{
    this.filteredPosts$ = this.scully.available$.pipe(
    map(routeList => {
      return routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/blog/`) && route.route.includes(event.target.value)
      );
    })
  );
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
 

  ngOnInit() {
     this.posts$ = this.scully.available$.pipe(
    map(routeList => {
      return routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/blog/`)
      );
    })
  );
  this.filteredPosts$ = this.posts$
    }
}
