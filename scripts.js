var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function myFunction() {
   


	while (lowercaseBegining != "open mailbox"){
	
		var begining = window.prompt("West of House. \nYou are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.");
		var lowercaseBegining = begining.toLowerCase();
		if (lowercaseBegining === "open mailbox") {
  var leafletState =  window.prompt("Opening the small mailbox reveals a leaflet.");
  
} else {
     window.alert("I don't know the word " + begining);
}
	
		}
		
 if (leafletState = "read leaflet") {
      window.prompt("WELCOME TO ZORK! \nZORK is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!")
    }  else {
    	window.alert("i dont know the word " + leafletState);
    }
    
}