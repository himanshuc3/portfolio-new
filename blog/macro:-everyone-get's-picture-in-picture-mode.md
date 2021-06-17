---
title: 'Microbe: Everyone get''s Picture-in-Picture mode'
description: 'Brief on PIP API and it''s current draft status'
date: 'Mar 30'
published: true
poster: 'assets/blog/pip.jpg'
icon: 'assets/blog/pip-icon.svg'
tags: ['js', 'macro']
---

>  Define Microbe : microscopic, single-celled organisms like bacteria and fungi. That's the most lucid definition and also the first google search result (I care about SEO).

Well keeping the context, a microbe blog topic is considered as a TIL topic. Purpose of these type of articles is to be able to read them in even the most busiest of work days. So let's get rolling .


With that out of the way, let's shallow dive this topic. We are going to introduce Picture in Picture API in browsers and how to overlay any OTT websites like Netflix, Amazon... or any website that contains a video for that matter, to go into PIM.. ah, PIP mode.

## Picture in Picture API

Before we dive into the API, let's see a demo of what we're dealing with here:


<figure>

![PiP in Chrome](assets/blog/gif1.gif)
<figcaption>Youtube pip mode: right click twice and select PIP mode</figcaption>

</figure>

The [Picture-in-Picture](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API) API allow websites to create a floating window out of a video, always on top of other windows so that users may continue consuming media while they interact with other content sites, or applications on their device.

Keyword from above is `<video />` i.e. [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) is the only HTML element on which this interface method is exposed.


Here's a small snippet of code that can copied to console in dev tools & let's you use the PIP api to the first video on a html page:

<p class="codeblock-title">Selects the first video in the page and shows in PIP</p>

```js
var selectedVideo = document.getElementsByTagName('video')[0]; // selects the first video, can also select by classname/id if multiple videos are playing on the same page
selectedVideo.disablePictureInPicture = false // enable pip mode 
await selectedVideo.requestPictureInPicture() // enjoy PIP
```

Here's a demo of using the above snippet on hotstar (streaming service popular in India):

<figure>

![PiP in everywhere](assets/blog/gif2.gif)
<figcaption>Youtube pip mode: right click twice and select PIP mode</figcaption>

</figure>

NOTE: A word of caution

Support for it is still in it's early stage, atleast with adoption from browsers. Although 
latest versions of chrome, safari and edge support it, firefox still has partial support.

![Can I use](assets/blog/pip-caniuse.png)
