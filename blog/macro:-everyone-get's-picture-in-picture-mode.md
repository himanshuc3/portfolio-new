---
title: 'Macro: Everyone get''s Picture-in-Picture mode'
description: 'Brief on PIP API and it''s current draft status'
date: 'Mar 30'
published: true
poster: 'assets/blog/pip.jpg'
icon: 'assets/blog/pip-icon.svg'
tags: ['js', 'macro']
---

Hola amigos, let's start with this coffee break post with all my spanish exhausted in my first couple of words. 

So we are starting with a micro post and noobs who do not know it's definition:

>  Micro Post : It's a TIL topic. We concentrate on an atomic topic and gist is 'If you don't know, now you know'.


With that out of the way, let's get into the crux of the post. We are going to introduce Picture in Picture API in browsers and how to overlay any video websites like Netflix, Amazon... to go into PIMP *cough cough* PIP mode.

## Picture in Picture mode

The [Picture-in-Picture](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API) API allow websites to create a floating video window always on top of other windows so that users may continue consuming media while they interact with other content sites, or applications on their device.

Keyword from above is `video` i.e. [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) is the only HTML element on which this interface method is exposed aka video tag.

<figure>

![PiP in Chrome](assets/blog/gif1.gif)
<figcaption>Youtube pip mode: right click twice and select PIP mode</figcaption>

</figure>

Now that you see it in action, let's see how we can add this to literally any website (amazon, netflix...) and create a PIP. 
<p class="codeblock-title">Selects the first video in the page and shows in PIP</p>

```js
var selectedVideo = document.getElementsByTagName('video')[0]; // selects the first video, can also select by classname/id if multiple videos are playing on the same page
selectedVideo.disablePictureInPicture = false // enable pip mode 
await selectedVideo.requestPictureInPicture() // enjoy PIP
```

That is literally all we need to do, and here's a demo with hotstar (streaming service popular in India):

<figure>

![PiP in everywhere](assets/blog/gif2.gif)
<figcaption>Youtube pip mode: right click twice and select PIP mode</figcaption>

</figure>

NOTE: A word of caution

Support for it is still in it's early stage, atleast with adoption from browsers. Although 
latest versions of chrome, safari and edge support it, firefox still has partial support.

![Can I use](assets/blog/pip-caniuse.png)
