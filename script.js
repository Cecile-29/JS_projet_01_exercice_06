//*************corection fonction Agnès ************
function displayAge(){
  var age = document.getElementById('age').value;
  //si la variable 'age' exist
  if (age){
    // si age est supérieur à 0
    if (age > 0){
      // si age est supérieur ou égal à 18
      if (age >= 18){
        //alors une moal affiche 'vous êtes majeur !'
        alert('Vous êtes majeur !');
        // sinon une modal affiche 'Vous êtes mineur !'
      }
      else{
        alert('Vous êtes mineur !');
      }
      // si la conditon ligne 35, n'est pas remplie
      //une modale demande de rentrer un âge valide
      }
  else{
    alert('Veuillez rentrer un âge valide, merci !');
      }
  // si la condition de la ligne 33 n'est pas remplie(si âge n'existe pas)
  // alors on demande à l'utilisateur de remplir des champs valides
  }else {
    alert('Veuillez remplir le champ avec des chiffres ou des nombres, merci !');
  }
}
