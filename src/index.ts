let nev=/[a-zA-Z]{1,}/;
let orszag=/[a-zA-Z]{1,}/;
let varos=/[a-zA-Z]{1,}/;
let utca=/[a-zA-Z 0-9]{1,}/;
let iranyitoSzam=/[A-Z 0-9]/;
let bankkartyaSzam=/[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}/;
let ellenorzoKod=/[0-9]{3,3}/;
let bankkartyaraIrtNev=/[a-zA-Z ]/;

document.getElementById("gomb")!.addEventListener("click",()=>{
    let abankartya=(document.getElementById("kartyaszam")as HTMLInputElement).value;
    console.log(bankkartyaSzam.test(abankartya));

})
