let txet = document.querySelector('#title');
let para = document.querySelector('#para');
let dis = document.querySelector('#dis');
let day = document.querySelector('#day');
let pic = document.querySelector('#rap');

let two =   document.querySelector("#mars");
let one = document.querySelector("#mo3");
let four = document.querySelector("#tit");
let three = document.querySelector("#eur")




document.querySelector("#mars")
.addEventListener("click", function() {
    pic.style.backgroundImage = "url('assets/destination/image-mars.png')";
    para.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    dis.innerHTML = "225 mil.KM";
    day.innerHTML = "9 months";
    txet.innerHTML = "mars";
});

document.querySelector("#mo3")
.addEventListener("click", function() {
    pic.style.backgroundImage =  "url('assets/destination/image-moon.png') ";
    para.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites";
    dis.innerHTML = "384,400 KM";
    day.innerHTML = "3 days";
    txet.innerHTML = "moon";



});
document.querySelector("#eur")
.addEventListener("click", function() {
    pic.style.backgroundImage = "url('assets/destination/image-europa.webp')";
    para.innerHTML = "he smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    dis.innerHTML = "628 mil.KM";
    day.innerHTML = "3 years";
    txet.innerHTML = "europa";


});

document.querySelector("#tit")
.addEventListener("click", function() {
    pic.style.backgroundImage = "url('assets/destination/image-titan.webp') ";
    para.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    dis.innerHTML = "1.6 BIL.KM";
    day.innerHTML = "7 years";
    txet.innerHTML = "titan";
});




one.addEventListener('mouseover' , function(){
    one.style.borderBottom = "3px solid white";
});
one.addEventListener('mouseout' , function(){
    if ( document.querySelector('#title').innerHTML === "moon" ){
        one.style.borderBottom = "3px solid white";
        two.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid transparent";
        four.style.borderBottom = "3px solid transparent";

    }else{

        one.style.borderBottom = "3px solid transparent";
    }
    
});
two.addEventListener('mouseover' , function(){
    two.style.borderBottom = "3px solid white";
});
two.addEventListener('mouseout' , function(){
    if ( txet.innerHTML === "mars" ){
        two.style.borderBottom = "3px solid white";
        one.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid transparent";
        four.style.borderBottom = "3px solid transparent";
    }else{
        two.style.borderBottom = "3px solid transparent";
    }
    
});
three.addEventListener('mouseover' , function(){
    three.style.borderBottom = "3px solid white";
});
three.addEventListener('mouseout' , function(){
    if ( txet.innerHTML === "europa" ){
        one.style.borderBottom = "3px solid transparent";
        two.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid white";
        four.style.borderBottom = "3px solid transparent";
    }else{
        three.style.borderBottom = "3px solid transparent";
    }
    
});
four.addEventListener('mouseover' , function(){
    four.style.borderBottom = "3px solid white";
});
four.addEventListener('mouseout' , function(){
    if ( txet.innerHTML === "titan" ){
        one.style.borderBottom = "3px solid transparent";
        two.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid transparent";
        four.style.borderBottom = "3px solid white";
    }else{
        four.style.borderBottom = "3px solid transparent";
    }
    
});

if (window.innerWidth <= 450 ){
    one.addEventListener("click" , function ( ){
        one.style.borderBottom = "3px solid white";
        two.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid transparent";
        four.style.borderBottom = "3px solid transparent";  
    });
    two.addEventListener("click" , function ( ){
        two.style.borderBottom = "3px solid white";
        one.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid transparent";
        four.style.borderBottom = "3px solid transparent";
    });
    three.addEventListener("click" , function ( ){
        one.style.borderBottom = "3px solid transparent";
        two.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid white";
        four.style.borderBottom = "3px solid transparent";
    });
    four.addEventListener("click" , function ( ){
        one.style.borderBottom = "3px solid transparent";
        two.style.borderBottom = "3px solid transparent";
        three.style.borderBottom = "3px solid transparent";
        four.style.borderBottom = "3px solid white";
    });
}

