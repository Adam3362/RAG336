
// (A) Splash screen - start


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
setTimeout( ()=>{

    splash.classList.add('display-none');
},2000)

})

const swiper = new Swiper('.swiper', {
    autoplay: {

      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // (A) byter vit till svart- start
function myFunction() {

    // (A) darkmode knapp text bytare- start
  var button = document.getElementById('darkmode1');

    if (button.innerHTML === "Dark") {
      button.innerHTML = "Light";
    }
    else
    button.innerHTML = "Dark";
    // (A) darkmode knapp text bytare-end

    if( document.getElementById("header").style.backgroundColor == "white"){
        var collection = document.getElementsByClassName("darkmode");
        for (var i = 0; i < collection.length; i++) {
          collection[0].style.color = "black";
        }

        collection = document.getElementsByClassName("text");
        for (var i = 0; i < collection.length; i++) {
          collection[i].style.color = "white";
        }
    
      document.getElementById("header").style.backgroundColor = "black"
      document.getElementById("textruta").style.backgroundColor = "black"
      document.getElementById("footer").style.backgroundColor = "black"
      document.getElementById("body").style.backgroundColor = "black"

      document.getElementById("description").style.color = "white"
      document.getElementById("button button5").style.backgroundColor = "black"
      document.getElementById("button button5").style.color = "white"
      document.getElementById("button button4").style.backgroundColor = "black"
      document.getElementById("button button4").style.color = "white"
      document.getElementById("button button3").style.backgroundColor = "black"
      document.getElementById("button button3").style.color = "white"
      document.getElementById("uhu").style.color ="white"
  }

  else{

      var collection = document.getElementsByClassName("darkmode");
      for (var i = 0; i < collection.length; i++) {
      collection[0].style.color = "white";
      }

      collection = document.getElementsByClassName("text");
    for (var i = 0; i < collection.length; i++) {
      collection[i].style.color = "black";
    }

    
      document.getElementById("header").style.backgroundColor = "white"
      document.getElementById("textruta").style.backgroundColor = "white"
      document.getElementById("footer").style.backgroundColor = "white"
      document.getElementById("body").style.backgroundColor = "white"
      document.getElementById("description").style.color = "black"
      document.getElementById("button button5").style.backgroundColor = "white"
      document.getElementById("button button5").style.color = "black"
      document.getElementById("button button4").style.backgroundColor = "white"
      document.getElementById("button button4").style.color = "black"
      document.getElementById("button button3").style.backgroundColor = "white"
      document.getElementById("button button3").style.color = "black"
      document.getElementById("uhu").style.color ="black"
    


  }
}
    // (A) darkmode knapp text bytare- end


    // (A) time script- start
  function displayTime() {
      var dateTime = new Date();
      var hrs = dateTime.getHours();
      var min = dateTime.getMinutes();
      var sec = dateTime.getSeconds();
      var session = document.getElementById('session');
  
      document.getElementById('hours').innerHTML = hrs;
      document.getElementById('minutes').innerHTML = min;
      document.getElementById('seconds').innerHTML = sec;
  
  }
  
       setInterval(displayTime, 10);
      // (A) time script- end

  // (A) onclick för varje sida då den skickar och testar om de dark elr wwhite- start
  document.getElementById("header").style.backgroundColor = "white"
    
      function aboutus() {
        // (A) VARIABLES TO PASS
        var first;
      
        if(document.getElementById("header").style.backgroundColor == "white"){
      
        first = "white"
          } 
          else {
        first="black"
        }
        // (B) URL PARAMETERS
        var params = new URLSearchParams();
        params.append("darkmode",first);
        
        
        // (C) GO!
        var url = "aboutus.html?" + params.toString()
        location.href = url;
        // window.open(url);
      }
  
      function xbox() {
        // (A) VARIABLES TO PASS
        var first;
      
        if(document.getElementById("header").style.backgroundColor == "white"){
  
        first = "white"
          } 
          else {
        first="black"
        }
            // (B) URL PARAMETERS
        var params = new URLSearchParams();
        params.append("darkmode",first);
        
        
        // (C) GO!
        var url = "Xbox.html?" + params.toString()
        location.href = url;
        // window.open(url);
      }

       
      function playstation() {
        // (A) VARIABLES TO PASS
        var first;
      
        if(document.getElementById("header").style.backgroundColor == "white"){
  
        first = "white"
          } 
          else {
        first="black"
        }
            // (B) URL PARAMETERS
        var params = new URLSearchParams();
        params.append("darkmode",first);
        
        
        // (C) GO!
        var url = "playstation.html?" + params.toString()
        location.href = url;
        // window.open(url);
      }

           
      function recent() {
        // (A) VARIABLES TO PASS
        var first;
      
        if(document.getElementById("header").style.backgroundColor == "white"){
  
         first = "white"
        } 
        else {
        first="black"
        }
        // (B) URL PARAMETERS
        var params = new URLSearchParams();
        params.append("darkmode",first);
        
        
        // (C) GO!
        var url = "recent.html?" + params.toString()
        location.href = url;
        // window.open(url);
      }
    // (A) onclick för varje sida då den skickar och testar om de dark elr wwhite- end

    // (A) tar emot från url och körs- start
    var params = new URLSearchParams(window.location.search),
          first = params.get("darkmode");
    if( first == "black"){

      var collection = document.getElementsByClassName("darkmode");
        for (var i = 0; i < collection.length; i++) {
          collection[0].style.color = "black";
        }

        collection = document.getElementsByClassName("text");
        for (var i = 0; i < collection.length; i++) {
          collection[i].style.color = "white";
        }
    
        document.getElementById("header").style.backgroundColor = "black"
        document.getElementById("textruta").style.backgroundColor = "black"
        document.getElementById("footer").style.backgroundColor = "black"
        document.getElementById("body").style.backgroundColor = "black"

        document.getElementById("description").style.color = "white"
        document.getElementById("button button5").style.backgroundColor = "black"
        document.getElementById("button button5").style.color = "white"
        document.getElementById("button button4").style.backgroundColor = "black"
        document.getElementById("button button4").style.color = "white"
        document.getElementById("button button3").style.backgroundColor = "black"
        document.getElementById("button button3").style.color = "white"
        document.getElementById("uhu").style.color ="white"

    } 
else {

   var collection = document.getElementsByClassName("darkmode");
      for (var i = 0; i < collection.length; i++) {
      collection[0].style.color = "white";
      }

      collection = document.getElementsByClassName("text");
    for (var i = 0; i < collection.length; i++) {
      collection[i].style.color = "black";
    }

    
    document.getElementById("header").style.backgroundColor = "white"
    document.getElementById("textruta").style.backgroundColor = "white"
    document.getElementById("footer").style.backgroundColor = "white"
    document.getElementById("body").style.backgroundColor = "white"
    document.getElementById("description").style.color = "black"
    document.getElementById("button button5").style.backgroundColor = "white"
    document.getElementById("button button5").style.color = "black"
    document.getElementById("button button4").style.backgroundColor = "white"
    document.getElementById("button button4").style.color = "black"
    document.getElementById("button button3").style.backgroundColor = "white"
    document.getElementById("button button3").style.color = "black"
    document.getElementById("uhu").style.color ="black"


}

var params = new URLSearchParams(window.location.search),
    first = params.get("darkmode");
    if( first == "black"){

    var button = document.getElementById('darkmode1');

    if (button.innerHTML === "Dark") {
    button.innerHTML = "Light";
    }
    else
    button.innerHTML = "Dark";


}
// (A) tar emot från url och körs- end


/* <------------------här är script för brightness-slider-------------->
  function fun(e)

  { 
  var container = document.getElementById('body');
  var val = e.value;
  container.setAttribute("style", "filter: brightness("+val+"%);");
  }
  
  
  const splash = document.querySelector('.splash');
  
  document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout( ()=>{
  
      splash.classList.add('display-none');
  },2000)
  
  })
  */