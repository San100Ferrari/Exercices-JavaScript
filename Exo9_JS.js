var mine = 100;

//Ecrivez ici la boucle qui vous permet d'enlever 1 unité d'or de la mine et d'annoncer
//dans la console combien il reste d'or dans la mine.

console.log("Il y a 100 unités d'or dans la mine.")

while (mine > 1) {
    mine--;
    console.log("Il reste " + mine + " unités d'or dans la mine.");
}

while (mine < 2 && mine > 0) {
    mine--;
    console.log("Il reste " + mine + " unité d'or dans la mine.");
}
// PS : le 2ème while ne sert à rien mais c'était juste pour enlever le s à "unité"