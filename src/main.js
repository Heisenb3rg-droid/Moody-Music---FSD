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

const energia = document.querySelector("#energia");
const valorEnergia = document.querySelector("#valorEnergia");

energia.addEventListener("input", () => {
  valorEnergia.textContent = energia.value;
});
export {};
//# sourceMappingURL=main.js.map