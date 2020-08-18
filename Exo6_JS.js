//Déclaration de la var person
let person = prompt("Veuillez indiquer votre âge ci-dessous");

//Déclaration de la structure conditionnelle
if (person >= 18) {
    alert("Vous pouvez entrer !");
} else if (person < 18) {
    alert("Vous ne pouvez pas rentrer !");
} else if (person > 70) { //Cette condition ne fonctionne pas, essayer de comprendre pourquoi plus tard
    alert("Vous ne pouvez pas rentrer !");
} else if (person != typeof(int)) {
    alert("L'âge que vous avez écrit est incorrect!");
}