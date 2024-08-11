<script>
  function openTab(tabName) {
    // Cache tous les éléments avec la classe "tabcontent"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Affiche l'onglet spécifique sélectionné
    document.getElementById(tabName).style.display = "block";
  }

  // Par défaut, affiche l'onglet "Madagascar" au chargement de la page
  document.getElementById("Madagascar").style.display = "block";
</script>
