// VARIABLES ============================================================

let cvecaraForm = document.getElementById("cvecara-form");

// Cvece section variables

let ruzeInput = document.getElementById("ruze-input");

let ljiljaniInput = document.getElementById("ljiljani-input");

let gerberiInput = document.getElementById("gerberi-input");

// Dodatni pokloni section variables

let bombonjeraChkbox = document.getElementById("bombonjera-chkbox");

let cokoladaChkbox = document.getElementById("cokolada-chkbox");

let sampanjacChkbox = document.getElementById("sampanjac-chkbox");

// Placanje section variables

let kesRadio = document.getElementById("kes-radio");

let karticaRadio = document.getElementById("kartica-radio");

// Buttons section variables

let izracunajBtn = document.getElementById("izracunaj-btn");

let resetujBtn = document.getElementById("resetuj-btn");

// Porudzbina section variables

let porudzbinaSection = document.getElementById("porudzbina-section");

// FUNCTIONALITY ====================================================================

// PREVENT DEFAUL FUNCTION for ".", "-" and "e" ============================

let preventDefault = (input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key == "e" || e.key == "-" || e.key == ".") {
      e.preventDefault();
    }
  });
};
preventDefault(ruzeInput);
preventDefault(ljiljaniInput);
preventDefault(gerberiInput);
// =========================================================================

var cenaBezPopusta;
var cenaSaPopustom;
var bombonjera;
var cokolada;
var sampanjac;
var ruzaDiv = document.createElement("div");
var ljiljanDiv = document.createElement("div");
var gerberDiv = document.createElement("div");

// Izracunaj eventListener
izracunajBtn.addEventListener("click", () => {
  let ruzeCena = ruzeInput.value * 150;
  let ljiljaniCena = ljiljaniInput.value * 120;
  let gerberiCena = gerberiInput.value * 70;
  let cenaZaSve = ruzeCena + ljiljaniCena + gerberiCena;
  let cenaPopust = 0;
  let ruzaImgLink = "/slike/rose.jpg";
  let ljiljanImgLink = "/slike/lily.png";
  let gerberImgLink = "/slike/gerber.jpg";

  // IMAGES RUZE
  if (ruzeInput.value < 10) {
    for (let i = 0; i < ruzeInput.value; i++) {
      let ruzaImg = document.createElement("img");
      ruzaImg.src = ruzaImgLink;
      porudzbinaSection.appendChild(ruzaDiv);
      ruzaDiv.appendChild(ruzaImg);
    }
  } else if (ruzeInput.value >= 10) {
    let ruzaImg = document.createElement("img");
    ruzaImg.src = ruzaImgLink;
    porudzbinaSection.appendChild(ruzaDiv);
    ruzaDiv.appendChild(ruzaImg);
    let brojRuza = document.createElement("span");
    brojRuza.textContent = `x ${ruzeInput.value}`;
    ruzaDiv.appendChild(brojRuza);
  }
  // IMAGES LJILJANI
  if (ljiljaniInput.value < 10) {
    for (let i = 0; i < ljiljaniInput.value; i++) {
      let ljiljanImg = document.createElement("img");
      ljiljanImg.src = ljiljanImgLink;
      porudzbinaSection.appendChild(ljiljanDiv);
      ljiljanDiv.appendChild(ljiljanImg);
    }
  } else if (ljiljaniInput.value >= 10) {
    let ljiljanImg = document.createElement("img");
    ljiljanImg.src = ljiljanImgLink;
    porudzbinaSection.appendChild(ljiljanDiv);
    ljiljanDiv.appendChild(ljiljanImg);
    let brojLjiljana = document.createElement("span");
    brojLjiljana.textContent = `x ${ljiljaniInput.value}`;
    ljiljanDiv.appendChild(brojLjiljana);
  }
  // IMAGE GERBERI
  if (gerberiInput.value < 10) {
    for (let i = 0; i < gerberiInput.value && i < 10; i++) {
      let gerberImg = document.createElement("img");
      gerberImg.src = gerberImgLink;
      porudzbinaSection.appendChild(gerberDiv);
      gerberDiv.appendChild(gerberImg);
    }
  } else if (gerberiInput.value >= 10) {
    let gerberImg = document.createElement("img");
    gerberImg.src = gerberImgLink;
    porudzbinaSection.appendChild(gerberDiv);
    gerberDiv.appendChild(gerberImg);
    let brojGerbera = document.createElement("span");
    brojGerbera.textContent = `x ${gerberiInput.value}`;
    gerberDiv.appendChild(brojGerbera);
  }
  // PLACANJE
  // Placanje Kesom
  if (kesRadio.checked == true) {
    if (bombonjeraChkbox.checked == true) {
      cenaZaSve += 500;
      bombonjera = document.createElement("p");
      porudzbinaSection.appendChild(bombonjera);
      bombonjera.textContent = "+ bombonjera";
    }
    if (cokoladaChkbox.checked == true) {
      cenaZaSve += 500;
      cokolada = document.createElement("p");
      porudzbinaSection.appendChild(cokolada);
      cokolada.textContent = "+ cokolada";
    }
    if (sampanjacChkbox.checked == true) {
      cenaZaSve += 500;
      sampanjac = document.createElement("p");
      porudzbinaSection.appendChild(sampanjac);
      sampanjac.textContent = "+ sampanjac";
    }
    if (cenaZaSve != 0) {
      cenaBezPopusta = document.createElement("p");
      cenaBezPopusta.textContent = `Cena je: ${cenaZaSve}`;
      porudzbinaSection.appendChild(cenaBezPopusta);
    }
    //Placanje Karticom
  } else if (karticaRadio.checked == true) {
    if (bombonjeraChkbox.checked == true) {
      cenaZaSve += 500;
      bombonjera = document.createElement("p");
      porudzbinaSection.appendChild(bombonjera);
      bombonjera.textContent = "+ bombonjera";
    }
    if (cokoladaChkbox.checked == true) {
      cenaZaSve += 500;
      cokolada = document.createElement("p");
      porudzbinaSection.appendChild(cokolada);
      cokolada.textContent = "+ cokolada";
    }
    if (sampanjacChkbox.checked == true) {
      cenaZaSve += 500;
      sampanjac = document.createElement("p");
      porudzbinaSection.appendChild(sampanjac);
      sampanjac.textContent = "+ sampanjac";
    }

    if (cenaZaSve > 2000) {
      cenaPopust = cenaZaSve - (cenaZaSve / 100) * 10;
    } else {
      cenaPopust = cenaZaSve;
    }
    if (cenaZaSve != 0) {
      cenaBezPopusta = document.createElement("p");
      cenaSaPopustom = document.createElement("p");
      cenaBezPopusta.textContent = `Cena bez popusta je: ${cenaZaSve}`;
      porudzbinaSection.appendChild(cenaBezPopusta);
      cenaSaPopustom.textContent = `Cena sa popustom je: ${cenaPopust}`;
      porudzbinaSection.appendChild(cenaSaPopustom);
      izracunajBtn.disabled = true;
    }
  } else {
    cenaBezPopusta = undefined;
    cenaSaPopustom = undefined;
    bombonjera = undefined;
    cokolada = undefined;
    sampanjac = undefined;
  }
});

// Resetuj eventListener
resetujBtn.addEventListener("click", () => {
  // cenaBezPopusta
  if (cenaBezPopusta != undefined) {
    porudzbinaSection.removeChild(cenaBezPopusta);
    cenaBezPopusta = undefined;
  }
  if (cenaSaPopustom != undefined) {
    porudzbinaSection.removeChild(cenaSaPopustom);
    cenaSaPopustom = undefined;
  }
  // pokloni
  if (bombonjera != undefined) {
    porudzbinaSection.removeChild(bombonjera);
    bombonjera = undefined;
  }
  if (cokolada != undefined) {
    porudzbinaSection.removeChild(cokolada);
    cokolada = undefined;
  }
  if (sampanjac != undefined) {
    porudzbinaSection.removeChild(sampanjac);
    sampanjac = undefined;
  }
  // slike cveca
  ruzaDiv.textContent = "";
  ljiljanDiv.textContent = "";
  gerberDiv.textContent = "";
  izracunajBtn.disabled = false;
});
