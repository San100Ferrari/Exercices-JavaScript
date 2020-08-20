//mathRandom
var min = 1;
var max = 100;
var alea = Math.floor(Math.random() * (max - min)) + min;
console.log(alea); //le console.log sera à supprimer plus tard !
//la function Math.floor permet de générer un nb sans virgule
//la function Math.random permet de générer un nb aléatoire
//dans l'exemple ci-dessus les var min et max permettent de créer l'intervalle

var count = 0;

while (nb != alea) {
    
    if (count > 2) {
        console.log("Vous avez réalisé " + count + " essai");
    } else {
        console.log("Vous avez réalisé " + count + " essais");
    }
    
    var nb = prompt("Veuillez saisir un nombre !");
    count++;
        
        if (nb < alea) {
            alert("Le nombre choisi est inférieur au nombre secret !");
        } else if (nb > alea) {
            alert("Le nombre choisi est supérieur au nombre secret !");
        } else if (nb == alea) {
            alert("Le nombre choisi est égal au nombre donné !");
            if (count < 2) {
                alert("Félicitations vous avez gagné ! Vous avez trouvé le nombre secret après " + count + " essai.");
            } else {
                alert("Félicitations vous avez gagné ! Vous avez trouvé le nombre secret après " + count + " essais.");
            }
        } else {
            alert("Le nombre choisi est inccorect !");
        }

}