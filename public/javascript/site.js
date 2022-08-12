$(document).ready(function(){
  //The text inserter/scroller and the counter begin here.

  //These are needed later.
  oldlines = 0;
  chars = 0;

  //This listens for a node (line) to be inserted.
  document.addEventListener("DOMNodeInserted", function () {

    //Counter begins here. Get the current number of lines first.
    var lines = document.getElementsByTagName('p').length;

    //Second, confirm whether the node insertion was a new line.
    //(Rikai also inserts and removes a node (a div).)
    var isnew = lines - oldlines;
    if (isnew > 0) {
      // If it is a new line, do a character count of the line and add it to the running tally.
      var i=lines-1
      var newline = document.getElementsByTagName('p')[i].innerHTML;
      var linechars = newline.length;
      newchars = chars + linechars;

      //Make the numbers look nice.
      var charsdisp = newchars.toLocaleString();
      var linesdisp = lines.toLocaleString();

      //Print the new counts into the counter.
      jQuery('#counter').text(charsdisp+' / '+linesdisp);

      //Get ready for the next line.
      oldlines = lines;
      chars = newchars;

      //The counter ends here and the text-scroller is below.
      //I've included it in the "if new line" statement.
      //(That is, it won't run unless a new line was added.)
      //Like this it won't autoscroll down every time Rikai is used.

      var LEEWAY = 200; // Amount of "leeway" pixels before latching onto the bottom.

      // Some obscene browser shit because making sense is for dweebs
      var b = document.body;
      var offset = b.scrollHeight - b.offsetHeight;
      var scrollPos = (b.scrollTop+offset);
      var scrollBottom = (b.scrollHeight - (b.clientHeight+offset));

      // If we are at the bottom, go to the bottom again.
      if (scrollPos >= scrollBottom - LEEWAY) {
        window.scrollTo(0,document.body.scrollHeight);
      }

    }; //This is the end of the "if new line" statement.

  }, false);
  // === End of scroller and counter script. ===


  // === Beginning of "remove last line" script. ===

  //Listen for click.
  document.getElementById("remove_button").addEventListener("click", function() {

    //Check whether there are any lines.
    var remove_lines = document.getElementsByTagName('p').length;
    if (remove_lines > 0) {

      //If there are, find the last line and do a character count.
      var q = remove_lines - 1;
      var last = document.getElementsByTagName('p')[q].innerHTML;
      var lastlen = last.length;

      //Remove the last line.
      $('body').children('p:last').remove();

      //Update the counter.
      var newch = chars - lastlen;
      var newchdisp = newch.toLocaleString();
      var newl = oldlines - 1;
      var newldisp = newl.toLocaleString();
      jQuery('#counter').text(newchdisp+' / '+newldisp);

      //Prepare for next line.
      chars = newch;
      oldlines = newl;
    };
  });
  // === End of "remove last line" script. ===
});
