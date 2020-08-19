let prgm = prompt("Veuillez taper ci-dessous le nom de l'aliment dont vous souhaitez avoir des informations.");

let expr = prgm; //Ici la valeur du expr est choisie en fonction de la valeur prgm que l'user a rentré

switch (expr) {
    case "tomate" :
        console.log("Origine végétale !");
        break;
    case "oeuf" :
        console.log("Origine animale !");
        break;
    case "lait" :
        console.log("Origine Animale !");
        break;
    case "tofu" :
        console.log("Origine végétale !");
        break;
    case "miel" :
        console.log("Origine animale !");
        break;
    case "foie gras" :
        console.log("Origine animale !");
        break;
    default :
        console.log("Pas d'informations correspondant à cet aliment !");
        break;
}
