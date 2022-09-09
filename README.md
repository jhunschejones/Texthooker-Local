# Texthooker Local

### Overview
This project is based off of a site that Matt gracefully hosts over at https://texthooker.com/. I have pulled down his code and modified it here for use when running locally / without an internet connection. I also made a couple improvements of my own, including removing the reliance on a deprecated version of jQuery, using a slightly more responsive and accessible layout, and swapping in a font that I preferred to what Matt was using. 😉

### How to use with clipboard inserter and mpv
* Install the [clipboard inserter](https://chrome.google.com/webstore/detail/clipboard-inserter/deahejllghicakhplliloeheabddjajm?hl=en) Chrome extension and allow access to file URLs in settings
* Install the [`mpvatious`](https://github.com/Ajatt-Tools/mpvacious) mpv script
* Open `index.html` in Chrome and make sure clipboard inserter extension is turned "on"
* Open a video file in mpv and confibure [`mpvatious`](https://github.com/Ajatt-Tools/mpvacious) to copy subtitles to clipboard _(configurable by pressing `a`, then `t`)_

For some suggested mpv defaults, feel free to borrow from my [`mpv_defaults`](https://github.com/jhunschejones/Language-Learning-Tools/tree/main/mpv_defaults) setup script!


![screenshot](/screenshot.png)
