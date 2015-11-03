/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet


var template= '<li id="idn" class="classname">' +
              "<h3>number</h3>" 

$(document).ready(function(){

   for (var i=0; i<data.length; i++){
            $(".cards").append(template.replace("classname", "done" )
                                       .replace("idn", data[i] )
                                       .replace("number", data[i]))};
                               
    
    
    $(".opt-start").click(function(){
      $("li").addClass('hidden').removeClass('done');
        
    });
    
    
    var conteggio=1;
    $("li").click(function(){
       if(this.id==conteggio){
          $(this).addClass('done').removeClass('hidden');
          conteggio++;
       }else{
          alert("Hai perso");
          $("li").addClass('hidden').removeClass('done');
          conteggio=1;
       }
     if(conteggio==11){
        alert("Hai vinto!");
     }  
    });
    
    
    
    
    
    
});







