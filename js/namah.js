var slideIndex=0;
var y,name;
var myIndex=0;
function getinfo(m,previewPic){
localStorage.setItem("y",m);

  name=previewPic.alt;
}
function screen(n){
  var i;
  var x=document.getElementsByClassName("navoptions");
  for(i=0; i<x.length; i++)
      x[i].style.backgroundColor="#000";
  
  x[n-1].style.backgroundColor="#5b0504";
}

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    slideIndex=++myIndex;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
function makepage(){
  var z=localStorage.getItem("y");
  document.getElementById('heading').innerHTML=name;
  if(z=="24"||z=="25"||z=="38"||z=="62"||z=="57"||z=="54"||z=="61"||z=="35"||z=="30"||z=="29"||z=="28"||z=="26"||z=="27"){
    document.getElementById('image').innerHTML='<img src="img/collection/'+z+'/'+z+'_1.png" class="heightfull mySlides" class="mySlides"><img src="img/collection/'+z+'/'+z+'_2.png" class="heightfull mySlides" > <a class="w3-btn-floating" style="position:absolute;top:45%;left:0" onclick="plusDivs(-1)">❮</a><a class="w3-btn-floating" style="position:absolute;top:45%;right:0" onclick="plusDivs(1)">❯</a>';
    carousel();
  }
  else if(z=="58"){
    document.getElementById('image').innerHTML='<img src="img/collection/'+z+'/'+z+'_1.png" class="heightfull mySlides" class="mySlides"><img src="img/collection/'+z+'/'+z+'_2.png" class="heightfull mySlides" ><img src="img/collection/'+z+'/'+z+'_3.png" class="heightfull mySlides" > <img src="img/collection/'+z+'/'+z+'_4.png" class="heightfull mySlides" ><a class="w3-btn-floating" style="position:absolute;top:45%;left:0" onclick="plusDivs(-1)">❮</a><a class="w3-btn-floating" style="position:absolute;top:45%;right:0" onclick="plusDivs(1)">❯</a>';
    carousel();
  }
  else if(z=="39"){
    document.getElementById('image').innerHTML='<img src="img/collection/'+z+'/'+z+'_1.png" class="heightfull mySlides" class="mySlides"><img src="img/collection/'+z+'/'+z+'_2.png" class="heightfull mySlides" > <img src="img/collection/'+z+'/'+z+'_3.png" class="heightfull mySlides" ><a class="w3-btn-floating" style="position:absolute;top:45%;left:0" onclick="plusDivs(-1)">❮</a><a class="w3-btn-floating" style="position:absolute;top:45%;right:0" onclick="plusDivs(1)">❯</a>';
    carousel();
  }
  else{
  document.getElementById('image').innerHTML='<img src="img/collection/'+z+'.png" class="heightfull">';
  }
}

function ToggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


