//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach(quare => {
  quare.addEventListener("mouseover", () => {
    squares.forEach(otherSquare => {
      if (otherSquare !== quare) {
        otherSquare.style.backgroundColor = "#6F4E37"; /* Coffee */
      }
    });
  });

  quare.addEventListener("mouseout", () => {
    squares.forEach(otherSquare => {
      otherSquare.style.backgroundColor = "#E6E6FA"; /* Lavender */
    });
  });
});
