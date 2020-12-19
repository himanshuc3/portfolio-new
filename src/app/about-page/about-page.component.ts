import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  aboutMeList: any = [
    {
      title: 'I love experimenting with different backend languages \n (currently on go)',
      path: 'assets/experiment.svg'
    },
    {
      title: 'Setup includes linux (ubuntu), terminator, vscode',
      path: 'assets/terminal.svg'
    },
    {
      title: 'Chess enthusiast, blunder master, hate being flagged',
      path: 'assets/flag.svg'
    },
    {
      title: 'Lover of sunshine, not to be mistaken with climate change',
      path: 'assets/sun.svg'
    },
    {
      title: 'Hit me up on fortnite, cod, rocket league',
      path: 'assets/gamepad.svg'
    }
    
  ]

  musicAlbums = [
    {
      path: 'assets/eminem_kamikaze.png',
      artist: 'Eminem',
      name: 'Kamikaze'
    },
     {
      path: 'assets/coldplay_everydaylife.png',
      artist: 'Coldplay',
      name: 'Everyday life'
    },
     {
      path: 'assets/eminem_kamikaze.png',
      artist: 'Eminem',
      name: 'Kamikaze'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
