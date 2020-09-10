const shareButton = document.querySelector(".share-icon-container");
const linksMenu = document.querySelector(".hiden-links");
const hideIt = document.querySelector(".info-and-contact");
const closeMenu = document.querySelector(".share-icon-container-hide");

shareButton.addEventListener("click", () => {
  linksMenu.classList.toggle("visible");
});
