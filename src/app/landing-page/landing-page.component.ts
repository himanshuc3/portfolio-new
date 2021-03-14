import { Component, OnInit } from '@angular/core';

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
      date: 'Dec 09, 2020'
    },
    {
      title: 'The Import On Interaction Pattern',
      path: 'assets/recently-2.svg',
      description: 'While working on pointclouds for Amphion and Zethus, I came across an interesting problem.',
      date: 'Dec 09, 2020'
    },
    {
      title: 'The Import On Interaction Pattern',
      path: 'assets/react.svg',
      description: 'While working on pointclouds for Amphion and Zethus, I came across an interesting problem.',
      date: 'Dec 09, 2020'
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

  constructor() { }

  ngOnInit(): void {
  }

}
