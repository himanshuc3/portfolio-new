import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {

   posts$: Observable<ScullyRoute[]>;
   search: string = '';
   filteredPosts$:Observable<ScullyRoute[]>;
  constructor(private scully: ScullyRoutesService) {
  }

  onSearchChange(value:string){
    this.filteredPosts$ = this.scully.available$.pipe(
    map(routeList => {
      return routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/blog/`) && route.route.includes(value)
      );
    })
  );
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
