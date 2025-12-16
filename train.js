let totalLivres = 500;
let livre_acheter = 50;
let livre_jeter = 10;
let livre_rachat = 5;
let affichageTotalLivres = 0;
let message = "Le nombre total de livres est de : ";

affichageTotalLivres = (totalLivres + livre_acheter - livre_jeter + livre_rachat);
console.log(message + affichageTotalLivres, "livres.");
// totalLivres = totalLivres - livre_acheter;
// totalLivres = totalLivres - livre_jeter;
// totalLivres = totalLivres + livre_rachat;