document.addEventListener("DOMContentLoaded", function() {
  const sponsorContainer = document.querySelector(".sponsor-container");
  const cloneContainer = sponsorContainer.cloneNode(true); // Clone le conteneur pour assurer un défilement continu
  sponsorContainer.after(cloneContainer); // Ajoute le clone après le conteneur original
});
