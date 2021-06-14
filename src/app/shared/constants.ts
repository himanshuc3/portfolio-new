import {  IconDefinition,faGithub,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faFile} from '@fortawesome/free-solid-svg-icons';

interface LINK {
    src: IconDefinition;
    link: string;
    className: string;
}

export const SOCIAL_LINKS: LINK[] = [
    {src: faFile, link: 'https://drive.google.com/file/d/1sVge_q4_8S9QsgX-uTaCNoY4WzbTjtAC/view?usp=sharing', className:"icon-resume"},
    {src: faTwitter, link: 'https://twitter.com/_himanshuc3',className:"icon-twitter"},
    {src: faGithub, link: 'https://www.github.com/himanshuc3/',className:"icon-github"},
    {src: faInstagram, link: 'https://www.instagram.com/hi_manshu3/',className:"icon-ig"},
]
