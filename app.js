// HTML VARIABLES ============================================================

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

// JS VARIABLES =================================================================

var cenaBezPopusta;
var cenaSaPopustom;
var bombonjera;
var cokolada;
var sampanjac;
var ruzaDiv = document.createElement("div");
var ljiljanDiv = document.createElement("div");
var gerberDiv = document.createElement("div");

// FUNCTIONALITY ====================================================================

// PREVENT DEFAUL FUNCTION for ".", "-" and "e"

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

// ImagesAdd FUNCTION
let imgAdd = (input, link, div) => {
  if (input.value < 10) {
    for (let i = 0; i < input.value; i++) {
      let img = document.createElement("img");
      img.src = link;
      porudzbinaSection.appendChild(div);
      div.appendChild(img);
    }
  } else if (input.value >= 10) {
    let img = document.createElement("img");
    img.src = link;
    porudzbinaSection.appendChild(div);
    div.appendChild(img);
    let brojRuza = document.createElement("span");
    brojRuza.textContent = `x ${input.value}`;
    div.appendChild(brojRuza);
  }
};

// Izracunaj eventListener ===========================================================

izracunajBtn.addEventListener("click", () => {
  // variables
  let ruzeCena = ruzeInput.value * 150;
  let ljiljaniCena = ljiljaniInput.value * 120;
  let gerberiCena = gerberiInput.value * 70;
  let cenaZaSve = ruzeCena + ljiljaniCena + gerberiCena;
  let cenaPopust = 0;
  let ruzaImgLink = "/slike/rose.png";
  let ljiljanImgLink = "/slike/lily.png";
  let gerberImgLink = "/slike/gerber.png";

  imgAdd(ruzeInput, ruzaImgLink, ruzaDiv);
  imgAdd(ljiljaniInput, ljiljanImgLink, ljiljanDiv);
  imgAdd(gerberiInput, gerberImgLink, gerberDiv);

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
      izracunajBtn.disabled = true;
    }
    // Placanje Karticom
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

// Resetuj eventListener ========================================================
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
