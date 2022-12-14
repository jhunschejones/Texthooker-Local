(() => {
  document.addEventListener("DOMContentLoaded", () => {

    // The text inserter/scroller and the counter begin here.
    document.addEventListener("DOMNodeInserted", () => {

      // Counter begins here. Get the current number of lines first.
      const currentLinesCount = document.getElementsByTagName("p").length;

      // Next, confirm whether the node insertion was a new line.
      // (Rikai also inserts and removes a div node.)
      const previousLinesCount = parseInt(document.querySelector("#counter").textContent);
      const newLinesCount = currentLinesCount - previousLinesCount;
      if (newLinesCount > 0) {
        // If it is a new line, do a character count of the line and add it to the running tally.
        const newestLine = document.getElementsByTagName("p")[currentLinesCount - 1];
        newestLine.textContent = newestLine.textContent.trim(); // remove spaces in lines

        // Update the new counts in the counter.
        document.querySelector("#counter").textContent = currentLinesCount.toLocaleString();

        // The counter ends here and the text-scroller is below.
        // I've included it in the "if new line" statement.
        // (That is, it won't run unless a new line was added.)
        // Like this it won't autoscroll down every time Rikai is used.

        const LEEWAY = 200; // Amount of "leeway" pixels before latching onto the bottom.

        const body = document.body;
        const offset = body.scrollHeight - body.offsetHeight;
        const scrollPosition = (body.scrollTop + offset);
        const scrollBottom = (body.scrollHeight - (body.clientHeight + offset));

        // If we are at the bottom, go to the bottom again.
        if (scrollPosition >= scrollBottom - LEEWAY) {
          window.scrollTo(0, document.body.scrollHeight);
        }
      };

    }, false);
    // === End of scroller and counter script. ===


    // === Beginning of "remove last line" script. ===
    document.getElementById("undoButton").addEventListener("click", () => {
      // Check whether there are any lines to remove.
      const linesToRemove = document.getElementsByTagName("p");
      if (linesToRemove.length > 0) {
        const currentLinesCount = parseInt(document.querySelector("#counter").textContent);
        const lastLine = document.getElementsByTagName("p")[currentLinesCount - 1];
        document.querySelector("body").removeChild(lastLine);
        document.querySelector("#counter").textContent = (currentLinesCount - 1).toLocaleString();
      };
    });
    // === End of "remove last line" script. ===

    // === Beginning of "clear all lines" script. ===
    document.getElementById("clearButton").addEventListener("click", () => {
      // Check whether there are any lines to remove.
      const linesToRemove = document.getElementsByTagName("p");

      if (linesToRemove.length > 0) {
        Array.from(linesToRemove).forEach((line) => {
          document.querySelector("body").removeChild(line);
        });
        document.querySelector("#counter").textContent = "0";
      };
    });
    // === End of "clear all lines" script. ===
  });
})();
