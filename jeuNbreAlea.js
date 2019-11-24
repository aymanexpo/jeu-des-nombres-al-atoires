var duree1=new Date();
        function nombreAleatoire(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        //-------------------------------------------------------------------------------------------------
        function demmanderUnNombre(){
            return prompt("entrez un nombre entier:");//recevoir un nombre du clavier de l'utilisateur
        }
        //test et affichage des resultats:
        var x=nombreAleatoire(20);
        var y=demmanderUnNombre();
        var i=1;
        do{
            if(x>y){
                alert("nombre inferieur veuillez le changer :(");
                alert("vous avez fait "+ i +"essais ");
                i++;
                y=demmanderUnNombre();
            }
            else if(x<y){
                alert("nombre superieur veuillez le changer :(");
                alert("vous avez fait "+ i +"essais ");
                i++;
                y=demmanderUnNombre();
            }    
        }while(x!=y); 
        
        if(x==y){
                alert("Bravo :) vous avez trouvé le vrais nombre : "+ x + " avec " + i + " nombre d essais"); 
                var duree2=new Date();
                var duree= duree2.getTime()-duree1.getTime();
                alert("vous avez trouvé le nombre en "+ duree/1000 +"secondes.");
            }
    // Aymane Talibi 3IIR2