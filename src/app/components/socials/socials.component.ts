import { Component, OnInit } from '@angular/core';
import {SOCIAL_LINKS} from '../../shared/constants'


@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  socialLinks = SOCIAL_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
