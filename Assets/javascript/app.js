
 
  $(function() {  
    var objptr=0; var quiztimer; var clock = 10;      
    var waittimer=0; var clock=0; var wait;
    
   
    function setNewTimer() {
      
      quiztimer = setInterval (function() {
        if (clock <= 0) {
            clearInterval(quiztimer);
        } 
        else {
          clock -=1;
          $('#msg').text("Time Remaining : " + clock + " Seconds" );
        }     
      }, 1000);
      
      if (clock <= 0) {
          showCorrectAns(objptr);
          clock=10;
      }
      objptr++;
      getNewQuestion();
      $('#choices').show();
    };


    function showCorrectAns() {
      var ans=quiz_Obj[objptr].answer; wait=0;
      $('#choices').hide();
      $('#quiz').text("The Corect Answer was : " +  quiz_Obj[objptr].choices[ans]);
     
      var tmout =setTimeout(function() {
          console.log("timeout");

      }, 3000)
      clearTimeout(tmout);
    };


    function getNewQuestion() {
      var i=0; 
      if (objptr>quiz_Obj.length-1) {
          objptr=0
      }
      $('#quiz').text(quiz_Obj[objptr].question);
      $('.btn').each(function(index) {
          $(this).text(quiz_Obj[objptr].choices[i++]);
      });
     
      setNewTimer();
    };


    $('#start').click(function() {
      $('#start').hide();
      $('#msg').text("");
      $('#choices').css("display","block");
      
      getNewQuestion(objptr);
    
    });   // end click
      

    $('.btn').click(function() {
        clearInterval(quiztimer);
        getNewQuestion(objptr);
      
    });   // end click



  });    // end of onload


