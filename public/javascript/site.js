(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // The text inserter/scroller and the counter begin here.
    let previousLinesCount = 0;
    let charsCount = 0;

    document.addEventListener("DOMNodeInserted", () => {
      // Counter begins here. Get the current number of lines first.
      let currentLinesCount = document.getElementsByTagName("p").length;

      // Second, confirm whether the node insertion was a new line.
      // (Rikai also inserts and removes a node (a div).)
      let newLinesCount = currentLinesCount - previousLinesCount;
      if (newLinesCount > 0) {
        // If it is a new line, do a character count of the line and add it to the running tally.
        const newestLine = document.getElementsByTagName("p")[currentLinesCount - 1].textContent;
        const newCharsCount = charsCount + newestLine.length;

        // Update the new counts in the counter.
        document.querySelector("#counter").textContent = `${newCharsCount.toLocaleString()} / ${currentLinesCount.toLocaleString()}`;

        // Get ready for the next line.
        previousLinesCount = currentLinesCount;
        charsCount = newCharsCount;

        // The counter ends here and the text-scroller is below.
        // I've included it in the "if new line" statement.
        // (That is, it won't run unless a new line was added.)
        // Like this it won't autoscroll down every time Rikai is used.

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

      }; // This is the end of the "if new line" statement.

    }, false);
    // === End of scroller and counter script. ===


    // === Beginning of "remove last line" script. ===
    document.getElementById("removeButton").addEventListener("click", () => {
      // Check whether there are any lines to remove.
      var linesToRemove = document.getElementsByTagName("p").length;
      if (linesToRemove > 0) {
        const lastLine = document.getElementsByTagName("p")[currentLinesCount - 1].textContent;
        document.querySelector("body").removeChild(lastLine);
        document.querySelector("#counter").textContent = `${(charsCount - lastLine.length).toLocaleString()} / ${(currentLinesCount - 1).toLocaleString()}`;

        // Prepare for next line.
        previousLinesCount = currentLinesCount - 1;
        charsCount = charsCount - lastLine.length;
      };
    });
    // === End of "remove last line" script. ===
  });
})();
