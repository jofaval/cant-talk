# Can't Talk #

A way to comunicate with your loved ones, or others, when you're not fully capable to physically verbalize it.

## Contents

1. [Motivation](#motivation)
1. [Tech stack](#tech-stack)
1. [Compatibility](#compatibility)
1. [Deployment](#deployment)
1. [Credits](#credits)

## Motivation
[Back to contents](#contents)

I had a minor anxiety attack in which I couldn't ask for help without breaking, that same morning I saw a post about the browser's native speech API.

## Tech stack
[Back to contents](#contents)

- **Javascript**, it's a native abstraction of the already existant API the browsers provide
- **Speech API**, a native implementation, probably an expert system, or, in other words, a non-cognitive implementation of TTS (Text To Speech).

## Compatibility
[Back to contents](#contents)

You can quickly checkout the compatibility chart at:\
[https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

Currently, as of the time writting this, it's **NOT** supported at:

- Internet Explorer, (who uses it?! some people still, to who I apologize in advance for the inconvenience).
- Opera Android.
- Webview Android.

## Deployment
[Back to contents](#contents)

It is *manually* deployed to a website via FTP. It's fully client-side, which means, any static server would and should do.

As to better automate it, I'm currently using sFTP VSCode plugin, [link here](https://marketplace.visualstudio.com/items?itemName=liximomo.sftp). So that each save automatically deploys my "application".

## Credits
[Back to contents](#contents)

To my mom, who helped me calmed down after, and during, the attack, and the main reason I wanted to create the app, as to comunicate it way easier.

To my friend that talked a bit of sense into me as to not put more pressure on myself and actually chill out.