function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close")
const submitButton = document.querySelectorAll(".btnSubmit")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
// TODO.1 = Fermer la modale
//  close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

//  function close modal
function closeModal() {
    modalbg.style.display = "none";
}

// TODO.2 = Implémenter entrées du formulaire , partie.1(voir html, ligne:58, 62, 66, 70, 74)
// TODO.2 = Implémenter entrées du formulaire , partie.2 & TODO.3 =Ajouter validation ou messages d'erreur

//1.lorsque l'utilisateur click en dehors de l'input=à la perte du focus=focusout, déclencher la methode checkValidityFirst()
var inputFirst = document.getElementById("first");
inputFirst.addEventListener("focusout", checkValidityFirst);
//methode vérifier la validité du prenom
function checkValidityFirst() {
    var prenom = inputFirst.value;
    if (prenom != "" && prenom.length >= 2) {
        inputFirst.classList.remove('invalid');
        closeMessage();
        return true;
    } else {
        inputFirst.classList.add('invalid');
        launchMessage();
        return false;
    }
}
//méthode pour apparition et disparation du message d erreur pour le Prenom lorsque la saisie ne respecte pas les contraintes
var check = document.getElementById("callout");

function launchMessage() {
    check.style.display = "block";
}

function closeMessage() {
    check.style.display = "none";
}

//2.lorsque l'utilisateur click en dehors de l'input=à la perte du focus=focusout, déclencher la methode checkValidityLast()
var inputLast = document.getElementById("last");
inputLast.addEventListener("focusout", checkValidityLast);
//methode vérifier la validité du nom
function checkValidityLast() {
    var nom = inputLast.value;
    if (nom != "" && nom.length >= 2) {
        inputLast.classList.remove('invalid');
        closeMessageLast();
        return true;
    } else {
        inputLast.classList.add('invalid');
        launchMessageLast();
        return false;
    }
}
//méthode pour apparition et disparation du message d erreur pour le Nom lorsque la saisie ne respecte pas les contraintes
var checkLast = document.getElementById("calloutLast");

function launchMessageLast() {
    checkLast.style.display = "block";
}

function closeMessageLast() {
    checkLast.style.display = "none";
}

//3.lorsque l'utilisateur click en dehors de l'input=à la perte du focus=focusout, déclencher la methode checkValidityMail()
var inputMail = document.getElementById("email");
inputMail.addEventListener("focusout", checkValidityMail);
//methode vérifier la validité du nom
function checkValidityMail() {
    var mail = inputMail.value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail != "" && mail.match(regex)) {
        inputMail.classList.remove('invalid');
        closeMessageMail();
        return true;
    } else {
        inputMail.classList.add('invalid');
        launchMessageMail();
        return false;
    }
}
//méthode pour apparition et disparation du message d erreur pour l'adresse mail lorsque la saisie ne respecte pas les contraintes
var checkMail = document.getElementById("calloutMail");

function launchMessageMail() {
    checkMail.style.display = "block";
}

function closeMessageMail() {
    checkMail.style.display = "none";
}

//4.lorsque l'utilisateur click en dehors de l'input=à la perte du focus=focusout, déclencher la methode checkValidityBirthDate()
var inputBirthDate = document.getElementById("birthDate");
inputBirthDate.addEventListener("focusout", checkValidityBirthDate);
//methode vérifier la validité la date de naissance
function checkValidityBirthDate() {
    var date = inputBirthDate.value;
    if (date != "") {
        inputBirthDate.classList.remove('invalid');
        closeMessageBirthDate();
        return true;
    } else {
        inputBirthDate.classList.add('invalid');
        launchMessageBirthDate();
        return false;
    }
}
//méthode pour apparition et disparation du message d erreur de la date d'anniversaire lorsque la saisie ne respecte pas les contraintes
var checkDate = document.getElementById("calloutBirthDate");

function launchMessageBirthDate() {
    checkDate.style.display = "block";
}

function closeMessageBirthDate() {
    checkDate.style.display = "none";
}

//5.lorsque l'utilisateur click en dehors de l'input=à la perte du focus=focusout, déclencher la methode checkValidityQuantity()
var inputQuantity = document.getElementById("quantity");
inputQuantity.addEventListener("focusout", checkValidityQuantity);
//methode vérifier la validité du nombre de participation aux tournois
function checkValidityQuantity() {
    var totalGame = inputQuantity.value;
    if (totalGame != "" && totalGame >= 0 && totalGame <= 99) {
        inputQuantity.classList.remove('invalid');
        closeMessageQuantity();
        return true;
    } else {
        inputQuantity.classList.add('invalid');
        launchMessageQuantity();
        return false;
    }
}
//méthode pour apparition et disparation du message d erreur nombre de Tournoi lorsque la saisie ne respecte pas les contraintes
var checkQuantity = document.getElementById("calloutQuantity");

function launchMessageQuantity() {
    checkQuantity.style.display = "block";
}

function closeMessageQuantity() {
    checkQuantity.style.display = "none";
}

//6. Recuperer la valeur des boutons radio saisie par l' utilisateur et verifier que une case radio est coché.
var radio = document.getElementsByName('location');
var newyork = radio.item(0);
var sanfrancisco = radio.item(1);
var seattle = radio.item(2);
var chicago = radio.item(3);
var boston = radio.item(4);
var portland = radio.item(5);

for (var i = 0; i < radio.length; i++) {
    var item = radio[i];
    item.addEventListener("click", checkValidityRadio)
}

function checkValidityRadio() {
    for (var i = 0; i < radio.length; i++) {
        var item = radio[i];
        if (item.checked === true) {
            closeMessagcountry();
            return true;
        }
    }
    launchMessageCountry();
}

//méthode pour apparition et disparation du message d erreur Country lorsque la saisie ne respecte pas les contraintes
var checkRadio = document.getElementById("calloutCountry");

function launchMessageCountry() {
    checkRadio.style.display = "block";
}

function closeMessagcountry() {
    checkRadio.style.display = "none";
}


//7.Méthode pour vérifier que l'utilisateur a bien cocher la case des conditions, obligatoire pour l' envoie valide du formulaire

var condition = document.getElementById("checkbox1");
condition.addEventListener("click", checkValidityCondition);


function checkValidityCondition() {

    if (condition.checked === true) {
        closeMessagCondition()
        return true;
    } else {
        launchMessageCondition()
        return false;
    }
}
//méthode pour apparition et disparation du message d erreur des conditions obligatoires 
var checkCondition = document.getElementById("calloutCondition");

function launchMessageCondition() {
    checkCondition.style.display = "block";
}

function closeMessagCondition() {
    checkCondition.style.display = "none";
}
//TODO.4 = Ajouter confirmation quand envoie réussi : pour envoyer le formulaire verifier que ts les elements revoient true 
//si oui aficher message alert Bravo sinon false avec alert message erreur  
//Utilisation des variables pour les resultats (boolean true, false) des méthodes 
//car 1: checker tous les elements sans qu au premier false les check s' arrete. 
//2: pour ne pas executé deux fois TOUT le code de la methode vu que le resultat est deja recuperable au premier appel.

function validate() {
    event.preventDefault();
    var resultFirst = checkValidityFirst();
    var resultLast = checkValidityLast();
    var resultMail = checkValidityMail();
    var resultBirthDate = checkValidityBirthDate();
    var resultQuantity = checkValidityQuantity();
    var resultRadio = checkValidityRadio();
    var resultCondition = checkValidityCondition();
    if (resultFirst === true && resultLast === true && resultMail === true && resultBirthDate === true && resultQuantity === true && resultRadio === true && resultCondition === true) {
        alert("Merci! Votre inscription a été envoyée.");
    } else {
        alert(" Le message n'a pas été envoyé car vous n'avez probablement pas saisis correctement tout les champs !");

    }

}

//Les donnees saisies sont conservées.