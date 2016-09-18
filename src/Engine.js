'use strict';

var Engine = function () {

    var nbBille = 0 ;

    //création du plateau de jeu plateauJeu[0] = Hgauche, [1] = Hdroite, [2] = Bgauche, [3] = Bdroite
    var plateauJeu = new Array(4);
    for(var i = 0; i < plateauJeu.length ; i++)
    {
        plateauJeu[i] = new Array(9);
        for(var j = 0; j < plateauJeu[i].length ; j++)
        {
            plateauJeu[i][j] = 0;
        }
    }

    //retourne le plateau de jeu
    this.getPlateauJeu=function(){

      return plateauJeu;
    };
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
            plateauJeu[lettre][chiffre]=1;
            nbBille++;
            retour = true;

        }
        console.log(plateauJeu);
        return retour;
    };

   //1 pour droite, 0 pour gauche = sensRotation
    this.rotation = function (sensRotation, plateauNum){

         var pRotation = new Array(9);

        if(sensRotation == 1) {


            pRotation[0] = plateauJeu[plateauNum][6];
            pRotation[1] = plateauJeu[plateauNum][3];
            pRotation[2] = plateauJeu[plateauNum][0];
            pRotation[3] = plateauJeu[plateauNum][8];
            pRotation[4] = plateauJeu[plateauNum][4];
            pRotation[5] = plateauJeu[plateauNum][1];
            pRotation[6] = plateauJeu[plateauNum][8];
            pRotation[7] = plateauJeu[plateauNum][5];
            pRotation[8] = plateauJeu[plateauNum][2];
        }else{
            pRotation[0] = plateauJeu[plateauNum][2];
            pRotation[1] = plateauJeu[plateauNum][5];
            pRotation[2] = plateauJeu[plateauNum][8];
            pRotation[3] = plateauJeu[plateauNum][1];
            pRotation[4] = plateauJeu[plateauNum][4];
            pRotation[5] = plateauJeu[plateauNum][7];
            pRotation[6] = plateauJeu[plateauNum][0];
            pRotation[7] = plateauJeu[plateauNum][3];
            pRotation[8] = plateauJeu[plateauNum][6];

        }

        for (var i = 0; i<pRotation.length;i++)
        {
            plateauJeu[plateauNum][i]=pRotation[i];

        }
       console.log(pRotation);
        console.log(plateauJeu);

    };

   



};



