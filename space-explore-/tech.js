let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");

let title = document.querySelector("h2");
let name_tit = document.querySelector("h1");
let description = document.querySelector("p");
let pp = document.getElementById("pi");

let one_desk = "url('assets/technology/image-launch-vehicle-portrait.jpg') " ;
let two_desk = "url('assets/technology/image-spaceport-portrait.jpg') ";
let three_desk = "url('assets/technology/image-space-capsule-portrait.jpg') " ;


let one_tab = "url('assets/technology/image-launch-vehicle-landscape.jpg') " ;
let two_tab = "url('assets/technology/image-spaceport-landscape.jpg') ";
let three_tab = "url('assets/technology/image-space-capsule-landscape.jpg') " ;

two.addEventListener("click", function() {
    one.classList.remove('dot');
    two.classList.add('dot');
    three.classList.remove('dot');

    name_tit.innerHTML = "SPACEPORT";
    description.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    pp.style.backgroundImage = two_desk ;


});

three.addEventListener("click", function() {
    one.classList.remove('dot');
    two.classList.remove('dot');
    three.classList.add('dot');

    name_tit.innerHTML = "SPACE CAPSULE";
    description.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    pp.style.backgroundImage = three_desk ;


});
one.addEventListener("click", function() {
    document.querySelector('h1').style.width = "100%";
    one.classList.add('dot');
    two.classList.remove('dot');
    three.classList.remove('dot');

    name_tit.innerHTML = "LAUNCH VEHICLE";
    description.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    pp.style.backgroundImage =  one_desk;


});

let width = window.innerWidth;
if (  width <= 770 ){

    one_desk = one_tab;
    two_desk = two_tab;
    three_desk = three_tab;

}
else{
     one_desk = "url('assets/technology/image-launch-vehicle-portrait.jpg') " ;
     two_desk = "url('assets/technology/image-spaceport-portrait.jpg') ";
     three_desk = "url('assets/technology/image-space-capsule-portrait.jpg') " ;
}