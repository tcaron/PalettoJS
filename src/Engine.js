'use strict';

var Engine = function () {

    var nbBille = 0 ;

    //création du plateau de jeu plateau[0] = Hgauche, [1] = Hdroite, [2] = Bgauche, [3] = Bdroite
    var plateauJeu = new Array(4);
    for(var i = 0; i < plateauJeu.length ; i++)
    {
        plateauJeu[i] = new Array(9);
        for(var j = 0; j<plateauJeu[i].length ; j++)
        {
            plateauJeu[i][j] = 0;
        }
    }

    //retourne le nombre de bille
    this.getNbBilles=function(){

        return nbBille;
    };

    var player = "blanc" ;

    // retourne le joueur
    this.getPlayer=function(){

        return player;
    }
    // change la couleur selon le joueur qui joue pour le tour suivant
    this.playerPlay = function(){

        if(player == "noir"){
            player = "blanc";
        }
        else if(player == "blanc")
        {
            player = "noir";
        }
        else{
            player = "blanc";
        }
    };


    this.mvBille = function(mouvement){

        var retour = false  ;
        var lettre = mouvement.charCodeAt(0)-97;
        var chiffre = mouvement.charCodeAt(1)-49;

        if (plateauJeu[lettre][chiffre] == 0){

            console.log('Emplacement disponible');
            nbBille++;
            retour = true;

        }

        return retour;
    };

    this.rotation = function (numPlateau){

         var plateauRotation = new Array(9);

          plateauJeu[numPlateau][0] = plateauRotation;
          plateauJeu[numPlateau][1] =
          plateauJeu[numPlateau][2] =
          plateauJeu[numPlateau][3] =
          plateauJeu[numPlateau][4] =
          plateauJeu[numPlateau][5] =
          plateauJeu[numPlateau][6] =
          plateauJeu[numPlateau][7] =
          plateauJeu[numPlateau][8] =
    };



};



