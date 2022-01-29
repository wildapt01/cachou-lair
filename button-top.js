// Scroll back to the top button - event handler
// NB: adapted for multiple browsers
// appears after 600px scrolling down

window.onscroll = () => {
  scrollFunction();
};
const scrollFunction = () => {
  document.getElementById("button-top").style.display =
    document.body.scrollTop > 600 || document.documentElement.scrollTop > 600
      ? "block"
      : "none";
};
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
