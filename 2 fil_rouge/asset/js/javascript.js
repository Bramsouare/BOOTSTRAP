var quantity = 0;
var quantityy = 0;

document.getElementById('increaseQuantity').addEventListener('click', function () {

    quantity++;
    document.getElementById('quantity').textContent = quantity;
});

var Envoyer = document.querySelector("button[type='submit']");
Envoyer.addEventListener("click", function (event) {
    event.preventDefault();
    validation();
});
document.getElementById('increaseQuantityy').addEventListener('click', function () {

    quantityy++;
    document.getElementById('quantityy').textContent = quantityy;
});

var Envoyer = document.querySelector("button[type='submit']");
Envoyer.addEventListener("click", function (event) {
    event.preventDefault();
    validation();
});
function validation() {
    var nomPrenom = document.getElementById("nomPrenom").value;
    var n_manquant = document.getElementById("n_manquant");
    var n_validation = /^[a-zA-Z\s']+$/;

    var email = document.getElementById("email").value;
    var email_manquant = document.getElementById("email_manquant");
    var email_validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var telephone = document.getElementById("telephone").value;
    var telephone_manquant = document.getElementById("telephone_manquant");
    var telephone_validation = /^[0-9]+$/;

    var adresse = document.getElementById("adresse").value;
    var adresse_manquant = document.getElementById("adresse_manquant");
    var adresse_validation = /^[a-zA-Z0-9\s,'.-]*$/;

    var nomPrenoms = document.getElementById("nomPrenoms").value;
    var n_manquants = document.getElementById("n_manquants");
    var n_validations = /^[a-zA-Z\s']+$/;

    var emails = document.getElementById("emails").value;
    var email_manquants = document.getElementById("email_manquants");
    var email_validations = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var telephones = document.getElementById("telephones").value;
    var telephone_manquants = document.getElementById("telephone_manquants");
    var telephone_validations= /^[0-9]+$/;

    var adresses = document.getElementById("adresses").value;
    var adresse_manquants = document.getElementById("adresse_manquants");
    var adresse_validations = /^[a-zA-Z0-9\s,'.-]*$/;

    n_manquant.textContent = "";
    email_manquant.textContent = "";
    telephone_manquant.textContent = "";
    adresse_manquant.textContent = "";
    n_manquants.textContent = "";
    email_manquants.textContent = "";
    telephone_manquants.textContent = "";
    adresse_manquants.textContent = "";

    if (!n_validation.test(nomPrenom)) {
        n_manquant.textContent = "Nom et prénom invalides";
        n_manquant.style.color = "red";
    }

    if (!email_validation.test(email)) {
        email_manquant.textContent = "Email invalide";
        email_manquant.style.color = "red";
    }

    if (!telephone_validation.test(telephone)) {
        telephone_manquant.textContent = "Téléphone invalide";
        telephone_manquant.style.color = "red";
    }

    if (!adresse_validation.test(adresse)) {
        adresse_manquant.textContent = "Adresse invalide";
        adresse_manquant.style.color = "red";
    }
    

    if (!n_validations.test(nomPrenoms)) {
        n_manquants.textContent = "Nom et prénom invalides";
        n_manquants.style.color = "red";
    }

    if (!email_validations.test(emails)) {
        email_manquants.textContent = "Email invalide";
        email_manquants.style.color = "red";
    }

    if (!telephone_validations.test(telephones)) {
        telephone_manquants.textContent = "Téléphone invalide";
        telephone_manquants.style.color = "red";
    }

    if (!adresse_validations.test(adresses)) {
        adresse_manquants.textContent = "Adresse invalide";
        adresse_manquants.style.color = "red";
    }
}
