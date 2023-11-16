<?php
$bdd=new PDO("mysql:host=sql212.epizy.com;dbname=epiz_32189096_loginesssai; chatset=utf8;" ,'epiz_32189096' ,'3McFJjLJE8K2vVu' )
  if(isset($_POST['envoi'])){
    if(!empty($_POST['pseudo'])) AND !empty($_POST['pseudo']);
      $pseudo = htmlspecialchars($_POST['pseudo']);
      $mdp    = sha1($_POST['mdp']);


      $recupUser = $bdd->prepare('SELECT * FROM user WHERE pseudo = ? AND mdp = ?');
      $recupUser->execute(array($pseudo,$mdp));

      if($recupUser->rowCount() > 0 ){
      }else{
        echo "Erreur"
      }



    }else{
        echo "va niquer ta mere tu sais pas ecrire ou quoi ? , feur"

  }



}


?>




<!DOCTYPE html>
<html lang="en">

<head>
    <title>JDZ - Login</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <script src="https://kit.fontawesome.com/a076d05399.js"> </script>
  <script src="script.js" defer></script>



</head>


<body>

    <div class="container13">
         <a href="../lol.html">
        Retour
           </a>
       </div>






  <div class="container1">

    <div class="container">
        <div class="logo">
            <img src="https://cdn.discordapp.com/attachments/980639204079976468/991448080186622032/unknown_4.png" >

          </div>

          <div class="tab-body" data-id="connexion">
              <form>
                <div class="row">
                  <i class="far fa-user" aria-hidden="false">
                  </i>
                <input type="user" name="pseudo" class="input" placeholder="Prénom">
                </div>
         <div class="row">
          <i class="fas fa-lock" aria-hidden="false"></i>
          <input placeholder="Mot de Passe" name="mdp" type="password" class="input">
         </div>
        <a href="https://www.youtube.com/watch?v=zBOFCoOogmM" class="link">Mot de passe oublié ? bah ntm</a>
        <button class="btn" type="button">Connexion</button>
      </form>
    </div>




    <div class="tab-body" data-id="inscription">
      <form>
        <div class="row">
          <i class="far fa-user"></i>
          <input type="user" class="input" placeholder="">
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" class="input" placeholder="Mot de Passe">
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" class="input" placeholder="Confirmer Mot de Passe">
        </div>
        <button class="btn" type="button">Inscription</button>
      </form>
    </div>

    <div class="tab-footer">
      <a class="tab-link active" data-ref="connexion" href="javascript:void(0)">Connexion</a>
      <a class="tab-link" data-ref="inscription" href="javascript:void(0)">Inscription</a>
    </div>
  </div>


</body>

</html>
