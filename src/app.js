import "./style.css";

let numeroCarta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let palos = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  function cartaRandom() {
    let numeroRandom = Math.floor(Math.random() * numeroCarta.length);
    let paloRandom = Math.floor(Math.random() * palos.length);

    document.getElementById("valorCarta").innerHTML = numeroCarta[numeroRandom];

    document.getElementById("paloCartaArriba").innerHTML = palos[paloRandom];
    document.getElementById("paloCartaAbajo").innerHTML = palos[paloRandom];

    if (palos[paloRandom] === "♦" || palos[paloRandom] === "♥") {
      document.getElementById("paloCartaArriba").style.color = "red";
      document.getElementById("paloCartaAbajo").style.color = "red";
    } else {
      document.getElementById("paloCartaAbajo").style.color = "black";
      document.getElementById("paloCartaArriba").style.color = "black";
    }
  }

  document.getElementById("botonCarta").addEventListener("click", cartaRandom);
  cartaRandom();
};
