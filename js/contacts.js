class Contact{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
    
 decrire(){
    return `Titulaire : ${this.nom} ${this.prenom} `
 }
}

const listContact = [];

listContact.push(contact1 = new Contact("elineau","anthony"));
listContact.push(contact2 = new Contact("deroit","amandine"));

function listChoix(){
let menu = 
`####### Menu ########
1 : Liste des contacts
2 : Ajouter un contact
0 : Quitter
######################`;

console.log(menu);

}

function listeContact(listContact){
console.log("Voici la liste des contacts :")

listContact.forEach(contact =>{
    console.log(contact.decrire());
})
}

function ajouteContact(nom, prenom){

        contact = new Contact(
            prompt("Veuillez saisir un Nom :", nom),
            prompt("Veuillez saisir un Prenom :", prenom));
        
    listContact.push(contact);
    console.log("le contact a été ajouté");
}

console.log("Bienvenue dans le gestionnaire des contacts !");

let choix;
    
    while(choix !== "0"){
        listChoix();
        choix = prompt("Choisir une option : ");

        switch(choix){
            case "1" :
            listeContact(listContact)
            break;
            
            case "2" : 
            ajouteContact()
            break;

            default:
                console.log("Je n'ai pas compris votre choix");
            break;  
        }

    }

    if(choix === "0"){
        console.log("Au revoir !");
    }