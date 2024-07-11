(function(displayText) {
    setTimeout(function() {
      displayText("10");
      setTimeout(function() {
        displayText("9");
        setTimeout(function() {
          displayText("8");
          setTimeout(function() {
            displayText("7");
            setTimeout(function() {
              displayText("6");
              setTimeout(function(){
                displayText("5");
                setTimeout(function(){ 
                  displayText("4");
                  setTimeout(function(){
                    displayText("3");
                    setTimeout(function(){
                      displayText("2");
                      setTimeout(function(){
                         displayText("1");
                         setTimeout(function() {
                           displayText("Happy Independence Day!");
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000); 
        }, 1000);
    }, 1000);
}, 1000);
})(function(text) {
    document.getElementById("countdown").textContent = text;
});  
  