"use strict";
let nev = /[a-zA-Z]{1,}/;
let orszag = /[a-zA-Z]{1,}/;
let varos = /[a-zA-Z]{1,}/;
let utca = /[a-zA-Z 0-9]{1,}/;
let iranyitoSzam = /[A-Z 0-9]/;
let bankkartyaSzam = /[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}/;
let ellenorzoKod = /[0-9]{3,3}/;
let bankkartyaraIrtNev = /[a-zA-Z ]/;
document.getElementById("gomb").addEventListener("click", () => {
    var _a;
    let abankkartya = document.getElementById("kartyaszam").value;
    console.log(bankkartyaSzam.test(abankkartya));
    if (bankkartyaSzam.test(abankkartya) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("kartyaszam");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("teljesnev");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let teljesnev = document.getElementById("teljesnev").value;
    console.log(nev.test(teljesnev));
    if (nev.test(teljesnev) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("teljesnev");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("teljesnev");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let country = document.getElementById("orszag").value;
    console.log(orszag.test(country));
    if (orszag.test(country) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("orszag");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("orszag");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let city = document.getElementById("varos").value;
    console.log(varos.test(city));
    if (varos.test(city) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("varos");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("varos");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let street = document.getElementById("utca").value;
    console.log(utca.test(street));
    if (utca.test(street) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("utca");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("utca");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let irsz = document.getElementById("iranyitoszam").value;
    console.log(iranyitoSzam.test(irsz));
    if (iranyitoSzam.test(irsz) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("iranyitoszam");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("iranyitoszam");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let code = document.getElementById("ellenorzokod").value;
    console.log(ellenorzoKod.test(code));
    if (ellenorzoKod.test(code) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("ellenorzokod");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("ellenorzokod");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    let name = document.getElementById("kartyanev").value;
    console.log(bankkartyaraIrtNev.test(name));
    if (bankkartyaraIrtNev.test(name) == false) {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("kartyanev");
            if (cucc) {
                cucc.style.borderColor = "RED";
            }
            x.style.color = "RED";
            x.textContent = "Nem jól töltötte ki";
        }
    }
    else {
        let x = document.getElementById("isvalid");
        if (x) {
            let cucc = document.getElementById("kartyanev");
            if (cucc) {
                cucc.style.borderColor = "BLACK";
            }
            x.style.color = "RED";
            x.textContent = null;
        }
    }
    if (((_a = document.getElementById("isvalid")) === null || _a === void 0 ? void 0 : _a.textContent) == null) {
        window.alert("Nem jó");
        console.log(":(");
    }
});
