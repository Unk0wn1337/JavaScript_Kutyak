import { KUTYAK } from "./adatok.js";
function main(){
    
    kutyak(KUTYAK);

}

function kutyak(lista){
    let segedValtozo = `<table class="table-hover">`
    segedValtozo += `<td>Nev</td>`
    segedValtozo += `<td>Ev</td>`
    segedValtozo += `<td>Fajta</td>`
    const KUTYAK = document.getElementById("kutyakDiv");
    for (let index = 0; index < lista.length; index++) {
       segedValtozo += `<tr>`
       segedValtozo += `<td>${lista[index].nev}</td>`
       segedValtozo += `<td>${lista[index].Ev}</td>`  // Fix the case here
       segedValtozo += `<td>${lista[index].fajta}</td>`
       segedValtozo += `</tr>`
    }
    segedValtozo += `</table>`
    KUTYAK.innerHTML += segedValtozo;    
}





main();