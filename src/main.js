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
const energiaMyWay = document.querySelector("#energiaMyWay");
const valorEnergiaMyWay = document.querySelector("#valorEnergiaMyWay");

if (energiaMyWay && valorEnergiaMyWay) {
energiaMyWay.addEventListener("input", () => {
  valorEnergiaMyWay.textContent = energiaMyWay.textContent;
});
}

const energiaIronFist = document.querySelector("#energiaIronFist");
const valorEnergiaIronFist = document.querySelector("#valorEnergiaIronFist");

if (energiaIronFist && valorEnergiaIronFist) {
  energiaIronFist.addEventListener("input", () => {
    valorEnergiaIronFist.textContent = energiaIronFist.value;
  });
}

const energiaNoRoots = document.querySelector("#energiaNoRoots");
const valorEnergiaNoRoots = document.querySelector("#valorEnergiaNoRoots");

if (energiaNoRoots && valorEnergiaNoRoots) {
  energiaNoRoots.addEventListener("input", () => {
    valorEnergiaNoRoots.textContent = energiaNoRoots.value;
  });
}
export {};
//# sourceMappingURL=main.js.map