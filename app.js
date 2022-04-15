/*
File: app.js
Author: Nagy Ádám
Copyright: 2022, Nagy Ádám
Group: Szoft I E 1/3
Date: 2022-04-15
Github: https://github.com/Adammars92
Licenc: GNU GPL
*/

const oktogonOldalMezo = document.querySelector("#oktogonOldal");
const oktogonTeruletMezo = document.querySelector("#oktogonTerulet");
const oktogonSzamitasGomb = document.querySelector("#teruletSzamitas");

// T = 2*(1+sqrt{2})*a^2
function TeruletSzamitas(){
    
    let oldal = oktogonOldalMezo.value;

    if (isNaN(oldal))
    {
        oktogonTeruletMezo.value = "Számot kérek!"
    }

    else
    {
        if (oldal <= 0)
        {
            oktogonTeruletMezo.value = "0-nál nagyobb számot kérek!";
        }
        else
        {
    
            let eredmeny = 2 * (1 + Math.sqrt(2)) * Math.pow(oldal, 2);
        
            oktogonTeruletMezo.value = eredmeny.toFixed(2);
        }
    }
}

oktogonSzamitasGomb.addEventListener('click', function(){ TeruletSzamitas() } );

