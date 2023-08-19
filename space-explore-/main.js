

document.getElementById("clk").addEventListener(
    "click" , function (){
        if (document.querySelector(".navigation").style.left == '20%' ){
            document.querySelector(".navigation").style.left = '200%';                 
            document.querySelector('#clk').style.backgroundImage = "url('assets/shared/icon-hamburger.svg')";
        }else{
                 document.querySelector(".navigation").style.left = '20%';
                 document.querySelector('#clk').style.backgroundImage = "url('assets/shared/icon-close.svg')";
                }
               
    }
);


