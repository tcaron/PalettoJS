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

    //ajoute une bille sur le pateau
    this.addBilles = function(){

        nbBille++;
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
        console.log(retour);
        return retour;
    };



};



