import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import {ActivatedRoute} from '@angular/router';
import { Observable,combineLatest } from 'rxjs';
import { map , pluck} from 'rxjs/operators';
import {HighlightService} from '../components/syntaxHighlighting/highlight.service'



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit,AfterViewChecked {

  $blogPostMetadata: Observable<ScullyRoute | undefined> 
  private highlightService: HighlightService

 constructor(
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}


  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
  ngOnInit(): void {
   this.$blogPostMetadata = this.scully.available$.pipe(
     map(routeList => {
       return routeList.find((route: ScullyRoute) =>{
        return route.route === `/blog/${this.activatedRoute.snapshot.params.slug}`
          
       }
     )
     })
   )
  }

}
