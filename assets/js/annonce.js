$(document).ready(function() {
    $('#paysFiltre').change(function() {
        var selectedPays = $(this).val(); // Récupère la valeur sélectionnée (madagascar ou reunion)
        
        // Appeler une fonction pour filtrer les annonces en fonction du pays sélectionné
        filtrerAnnoncesParPays(selectedPays);
    });
});

function filtrerAnnoncesParPays(pays) {
    // Masquer toutes les annonces
    $('.annonce').hide();
    
    // Afficher les annonces correspondant au pays sélectionné
    $('.' + pays).show();
}
