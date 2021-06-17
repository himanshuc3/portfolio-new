import { Component, OnInit } from '@angular/core';

import {SOCIAL_LINKS} from '../shared/constants'

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
      name: 'Kamikaze',
      link: 'https://music.youtube.com/playlist?list=OLAK5uy_kRVaDLvDemKrwYjkdUTryKHIyQa_RiiPo'
    },
     {
      path: 'assets/coldplay_everydaylife.png',
      artist: 'Coldplay',
      name: 'Everyday life',
       link: 'https://music.youtube.com/playlist?list=OLAK5uy_mnshCwgGyL-QtFFN891bsO85Ied3K8h08'
    },
     {
      path: 'assets/eminem_album.png',
      artist: 'Eminem',
      name: 'Music to be murdered by',
      link: 'https://music.youtube.com/playlist?list=OLAK5uy_lIEaoIYU5E4kdhoBqFtrrnRbtftmIAueQ'
    }
  ]

  socialLinks = SOCIAL_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
