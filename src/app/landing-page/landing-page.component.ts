import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
 import { map } from 'rxjs/operators';
 
import {SOCIAL_LINKS} from '../shared/constants'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export default class LandingPage implements OnInit {

  recentBlogs:any = [
    {
      title: 'On hover show poster: css draft for next age',
      path: 'assets/react.svg',
      description: 'While working on pointclouds for Amphion and Zethus, I came across an interesting problem.',
      date: 'Dec 09'
    },
    {
      title: 'The Import On Interaction Pattern',
      path: 'assets/recently-2.svg',
      description: 'While working on pointclouds for Amphion and Zethus, I came across an interesting problem.',
      date: 'Oct 23'
    },
    {
      title: 'The Import On Interaction Pattern',
      path: 'assets/react.svg',
      description: 'While working on pointclouds for Amphion and Zethus, I came across an interesting problem.',
      date: 'Apr 29'
    },
  ]

  projects = [
    {
      title: 'cric-cli',
      description: 'A cli extension to follow cricket in cli made in Node js and nothing to be worry off.',
      github: 'https://www.github.com/rishabh570/criccli',
      path: 'assets/github-logo.svg'
    },
    {
      title: 'cric-cli',
      description: 'A cli extension to follow cricket in cli made in Node js and nothing to be worry off.',
      github: 'https://www.github.com/rishabh570/criccli',
      path: 'assets/github-logo.svg'

    },
    {
      title: 'cric-cli',
      description: 'A cli extension to follow cricket in cli made in Node js and nothing to be worry off.',
      github: 'https://www.github.com/rishabh570/criccli',
      path: 'assets/github-logo.svg'

    }
  ]


  socialLinks = SOCIAL_LINKS

   posts$: Observable<ScullyRoute[]>;
  constructor(private scully: ScullyRoutesService) {
  }


  ngOnInit() {
     this.posts$ = this.scully.available$.pipe(
    map(routeList => {
      return routeList.filter((route: ScullyRoute) =>
        route.route.startsWith(`/blog/`)
      );
    })
  );
    }

}
