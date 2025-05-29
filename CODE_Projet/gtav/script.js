document.addEventListener('DOMContentLoaded', () => {
    // Sélectionnez le bouton burger (le label)
    const burgerMenuLabel = document.querySelector('.burger-menu');
    // Sélectionnez l'input checkbox à l'intérieur du label
    const burgerToggleInput = burgerMenuLabel.querySelector('input[type="checkbox"]');
    // Sélectionnez la liste des liens (le <ul> qui est maintenant dans le label)
    const navLinksList = burgerMenuLabel.querySelector('ul');

    // Optionnel : Fermer le menu si on clique sur un lien à l'intérieur du menu
    if (navLinksList) {
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerToggleInput.checked = false; // Décoche l'input pour fermer le menu
            });
        });
    }

    // Optionnel : Fermer le menu si l'utilisateur clique en dehors du menu ou du bouton burger
    document.addEventListener('click', (event) => {
        // Si le clic n'est PAS sur le label du burger et que le menu est ouvert
        if (!burgerMenuLabel.contains(event.target) && burgerToggleInput.checked) {
            burgerToggleInput.checked = false; // Décoche l'input
        }
    });
});