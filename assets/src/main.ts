class Cancion {
  titulo: string;
  artista: string;
  energia: number;
  alegria: number;
  relajacion: number;
  nostalgia: number;

  constructor(titulo: string, artista: string) {
    this.titulo = titulo;
    this.artista = artista;

    this.energia = 50; //Todos los parámetros parten de un valor neutral ya que luego va a depender del usuario modificarlo a su gusto.
    this.alegria = 50;
    this.relajacion = 50;
    this.nostalgia = 50;
  }
}

const canciones: Cancion[] = [ //Nombres de las 3 canciones y sus respectivos artistas
  new Cancion("My Way", "Frank Sinatra"),
  new Cancion("THE IRON FIST", "Masaru Yokoyama"),
  new Cancion("No Roots", "Alice Merton")
];

console.log(canciones);