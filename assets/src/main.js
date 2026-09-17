class Cancion {
    titulo;
    artista;
    energia;
    alegria;
    relajacion;
    nostalgia;
    constructor(titulo, artista) {
        this.titulo = titulo;
        this.artista = artista;
        this.energia = 50; //Todos los parámetros parten de un valor neutral ya que luego va a depender del usuario modificarlo a su gusto.
        this.alegria = 50;
        this.relajacion = 50;
        this.nostalgia = 50;
    }
}
const canciones = [
    new Cancion("My Way", "Frank Sinatra"),
    new Cancion("THE IRON FIST", "Masaru Yokoyama"),
    new Cancion("No Roots", "Alice Merton")
];
console.log(canciones);

//Los 4 valores de la canción 1

const energiaMyWay = document.querySelector("#energiaMyWay");
const valorEnergiaMyWay = document.querySelector("#valorEnergiaMyWay");

if (energiaMyWay && valorEnergiaMyWay) {
energiaMyWay.addEventListener("input", () => {
  valorEnergiaMyWay.textContent = energiaMyWay.value;
});
}

const alegriaMyWay = document.querySelector("#alegriaMyWay");
const valorAlegriaMyWay = document.querySelector("#valorAlegriaMyWay");

if (alegriaMyWay && valorAlegriaMyWay) {
  alegriaMyWay.addEventListener("input", () => {
    valorAlegriaMyWay.textContent = alegriaMyWay.value;
  });
}

const relajacionMyWay = document.querySelector("#relajacionMyWay");
const valorRelajacionMyWay = document.querySelector("#valorRelajacionMyWay");

if (relajacionMyWay && valorRelajacionMyWay) {
  relajacionMyWay.addEventListener("input", () => {
    valorRelajacionMyWay.textContent = relajacionMyWay.value;
  });
}

const nostalgiaMyWay = document.querySelector("#nostalgiaMyWay");
const valorNostalgiaMyWay = document.querySelector("#valorNostalgiaMyWay");

if (nostalgiaMyWay && valorNostalgiaMyWay) {
  nostalgiaMyWay.addEventListener("input", () => {
    valorNostalgiaMyWay.textContent = nostalgiaMyWay.value;
  });
}

//Los 4 valores de la canción 2

const energiaIronFist = document.querySelector("#energiaIronFist");
const valorEnergiaIronFist = document.querySelector("#valorEnergiaIronFist");

if (energiaIronFist && valorEnergiaIronFist) {
  energiaIronFist.addEventListener("input", () => {
    valorEnergiaIronFist.textContent = energiaIronFist.value;
  });
}



//Los 4 valores de la canción 3

const energiaNoRoots = document.querySelector("#energiaNoRoots");
const valorEnergiaNoRoots = document.querySelector("#valorEnergiaNoRoots");

if (energiaNoRoots && valorEnergiaNoRoots) {
  energiaNoRoots.addEventListener("input", () => {
    valorEnergiaNoRoots.textContent = energiaNoRoots.value;
  });
}


const audioMyWay = document.querySelector("#audioMyWay"); //Botón de play/pausa para la canción 1
const botonMyWay = document.querySelector("#botonMyWay");

if (audioMyWay && botonMyWay) {
  botonMyWay.addEventListener("click", () => {

    if (audioMyWay.paused) {
      audioMyWay.play();
      botonMyWay.textContent = "⏸";
    } else {
      audioMyWay.pause();
      botonMyWay.textContent = "▶";
    }

  });
}


const audioIronFist = document.querySelector("#audioIronFist"); //Botón de play/pausa para la canción 2
const botonIronFist = document.querySelector("#botonIronFist");

if (audioIronFist && botonIronFist) {
  botonIronFist.addEventListener("click", () => {

    if (audioIronFist.paused) {
      audioIronFist.play();
      botonIronFist.textContent = "⏸";
    } else {
      audioIronFist.pause();
      botonIronFist.textContent = "▶";
    }

  });
}


const audioNoRoots = document.querySelector("#audioNoRoots"); //Botón de play/pausa para la canción 3
const botonNoRoots = document.querySelector("#botonNoRoots");

if (audioNoRoots && botonNoRoots) {
  botonNoRoots.addEventListener("click", () => {

    if (audioNoRoots.paused) {
      audioNoRoots.play();
      botonNoRoots.textContent = "⏸";
    } else {
      audioNoRoots.pause();
      botonNoRoots.textContent = "▶";
    }

  });
}
export {};
//# sourceMappingURL=main.js.map