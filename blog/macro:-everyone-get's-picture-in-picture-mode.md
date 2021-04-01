---
title: 'Macro: Everyone get''s Picture-in-Picture mode'
description: 'Brief on PIP API and it''s current draft status'
date: 'Mar 30'
published: true
poster: 'assets/blog/pip.jpg'
icon: 'assets/blog/pip-icon.svg'
tags: ['js', 'macro']
---
Hola amigos, let's start with this coffee break post with all my spanish exhausted in my first couple of words. /* Since this is my first post, I'm still figuring out how to hide my true feelings and make this post professional. */  

So we are starting with a micro post and noobs who do not know it's definition:

> We concentrate on an atomic topic. It's basically 'If you don't know, now you know' ; It's a TIL topic, those who know know.


With that out of the way, let's get into the crux (twss) of the post. We are going to introduce Picture in Picture mode in this post and how to simply request any video on any website like Netflix, Amazon ... to go into PIP mode (gandi soch translate icon) .

## Picture in Picture mode

The Picture-in-Picture API allow websites to create a floating video window always on top of other windows so that users may continue consuming media while they interact with other content sites, or applications on their device - mozilla docs

Keyword from above is `video` i.e. [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) is the only HTML element on which this interface method is exposed aka <video /> tag.


<figure>

![PiP in Chrome](assets/blog/gif1.gif)
<figcaption>Youtube pip mode: right click twice and select PIP mode</figcaption>

</figure>


<figure>

![PiP in everywhere](assets/blog/gif2.gif)
<figcaption>Youtube pip mode: right click twice and select PIP mode</figcaption>

</figure>