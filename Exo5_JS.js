let person = prompt("Veuillez indiquer votre âge ci-dessous :");

if (person >= 18) {
    alert("Vous pouvez entrer !");
} else if (person <= 0) {
    alert("L'âge que vous avez saisi est incorrect !");
} else if (person > 100) {
    alert("L'âge que vous avez saisi est incorrect !");
} else {
    alert("Vous ne pouvez pas rentrer !");
}