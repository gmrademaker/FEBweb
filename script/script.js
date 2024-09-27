var openButton = document.querySelector ("header > button");
 
openButton.onclick = openMenu;
 
function openMenu() {
  var deNav = document.querySelector("nav");
  var noScroll = document.querySelector("body");

  deNav.classList.toggle("toonMenu");
  noScroll.classList.toggle("toonMenu");
}