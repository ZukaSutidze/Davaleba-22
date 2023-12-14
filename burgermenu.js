const Arrows = document.querySelectorAll(".arrow");
const Exits = document.querySelectorAll(".exit");
const Hides = document.querySelectorAll('.hide'); 


for (let i = 0; i < Arrows.length; i++){
    Arrows[i].addEventListener('click', function() {
     Hides[i].classList.add('show'); 
     Hides[i].classList.remove('show1'); 
    });
    
    Exits[i].addEventListener('click', function() {
     Hides[i].classList.add('show1'); 
     Hides[i].classList.remove('show'); 
    });
}