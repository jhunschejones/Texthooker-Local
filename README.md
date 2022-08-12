# Texthooker Local

### Overview
This is a clone of the project that Matt gracefully hosts at https://texthooker.com/. I have pulled down his code and have modified it here for use when running locally / without an internet connection.

### Roadmap
_There are some changes I want to make but am pushing this up as is for the time being_

* Remove reliance on deprecated jquery version
* improve html layout to be responsive
* Swap in a font that I like better

### Using with clipboard inserter and mpv
* Install the [clipboard inserter](https://chrome.google.com/webstore/detail/clipboard-inserter/deahejllghicakhplliloeheabddjajm?hl=en) Chrome extension and allow access to file URLs in settings
* Load the site and make sure clipboard inserter is turned "on"
* Open your video file in mpv and use the [`mpvatious`](https://github.com/Ajatt-Tools/mpvacious) option to copy subtitles to clipboard (`a`, then `t`)

For some suggested mpv defaults, feel free to borrow from my [`mpv_defaults`](https://github.com/jhunschejones/Language-Learning-Tools/tree/main/mpv_defaults) script
