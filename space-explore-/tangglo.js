let one = document.querySelector("#cc");
let two = document.querySelector("#dd");
let three = document.querySelector("#ee");
let four = document.querySelector("#ff");

let title = document.querySelector("h2");
let name_tit = document.querySelector("h1");
let description = document.querySelector("p");
let pp = document.getElementById("pp");






one.addEventListener("click", function() {
    one.classList.add('dot');
    two.classList.remove('dot');
    three.classList.remove('dot');
    four.classList.remove('dot');


    title.innerHTML = "commander";
    name_tit.innerHTML = "douglas hurley";
    description.innerHTML = "ouglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    pp.style.backgroundImage = "url('assets/crew/image-douglas-hurley.png') ";


});
two.addEventListener("click", function() {
    one.classList.remove('dot');
    two.classList.add('dot');
    three.classList.remove('dot');
    four.classList.remove('dot');

    title.innerHTML = "Mission Specialist ";
    name_tit.innerHTML = "MARK SHUTTLEWORTH";
    description.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    pp.style.backgroundImage = "url('assets/crew/image-mark-shuttleworth.png') ";
});
three.addEventListener("click", function() {
    one.classList.remove('dot');
    two.classList.remove('dot');
    three.classList.add('dot');
    four.classList.remove('dot');

    title.innerHTML = "PILOT";
    name_tit.innerHTML = "Victor Glover";
    description.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
    pp.style.backgroundImage = "url('assets/crew/image-victor-glover.png') ";
    
});
four.addEventListener("click", function() {
    one.classList.remove('dot');
    two.classList.remove('dot');
    three.classList.remove('dot');
    four.classList.add('dot');

    title.innerHTML = "Flight Engineer";
    name_tit.innerHTML = "Anousheh Ansari";
    description.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
    pp.style.backgroundImage = "url('assets/crew/image-anousheh-ansari.png') ";
});

