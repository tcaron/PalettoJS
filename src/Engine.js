'use strict';

var Engine = function () {

    this.nbBilles = 0;
    this.colorWhoStart = 'blanc';

this.generatePlateau = function(){

    
     Array.matrix = function(numrows, numcols, initial) {
         var arr = [];
         for (var i = 0; i < numrows; ++i) {
             var columns = [];
             for (var j = 0; j < numcols; ++j) {
                 columns[j] = initial;
             }
             arr[i] = columns;
         }
         return arr;
     }

         var plateau = Array.matrix(6,6,0);

     var somme = 0;
     for (var i=0; i < plateau.length;i++){

        for (var j = 0 ; j<plateau.length;j++){

           if (plateau[i][j] != 0){

               console.log('des billes sont présentes sur le plateau');
           }
        }

     }



  };




    this.mvBille = function(mouvement){

        var retour = false ;
        var lettre = mouvement.charCodeAt(0);
        var chiffre = mouvement.charCodeAt(1);


        if (lettre == 'a'.charCodeAt(0) && chiffre =='1'.charCodeAt(0)){

            retour = true;

        }
      return retour;
    };


};



