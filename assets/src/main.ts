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

//Los 4 valores de la canción 1

const energiaMyWay: HTMLInputElement = document.querySelector("#energiaMyWay")!;
const valorEnergiaMyWay: HTMLElement = document.querySelector("#valorEnergiaMyWay")!;

if (energiaMyWay && valorEnergiaMyWay) {
energiaMyWay.addEventListener("input", () => {
  valorEnergiaMyWay.textContent = energiaMyWay.value;
});
}

const alegriaMyWay: HTMLInputElement = document.querySelector("#alegriaMyWay")!;
const valorAlegriaMyWay: HTMLElement = document.querySelector("#valorAlegriaMyWay")!;

if (alegriaMyWay && valorAlegriaMyWay) {
  alegriaMyWay.addEventListener("input", () => {
    valorAlegriaMyWay.textContent = alegriaMyWay.value;
  });
}

const relajacionMyWay: HTMLInputElement = document.querySelector("#relajacionMyWay")!;
const valorRelajacionMyWay: HTMLElement = document.querySelector("#valorRelajacionMyWay")!;

if (relajacionMyWay && valorRelajacionMyWay) {
  relajacionMyWay.addEventListener("input", () => {
    valorRelajacionMyWay.textContent = relajacionMyWay.value;
  });
}

const nostalgiaMyWay: HTMLInputElement = document.querySelector("#nostalgiaMyWay")!;
const valorNostalgiaMyWay: HTMLElement = document.querySelector("#valorNostalgiaMyWay")!;

if (nostalgiaMyWay && valorNostalgiaMyWay) {
  nostalgiaMyWay.addEventListener("input", () => {
    valorNostalgiaMyWay.textContent = nostalgiaMyWay.value;
  });
}

//Los 4 valores de la canción 2

const energiaIronFist: HTMLInputElement = document.querySelector("#energiaIronFist")!;
const valorEnergiaIronFist: HTMLElement = document.querySelector("#valorEnergiaIronFist")!;

if (energiaIronFist && valorEnergiaIronFist) {
  energiaIronFist.addEventListener("input", () => {
    valorEnergiaIronFist.textContent = energiaIronFist.value;
  });
}

const alegriaIronFist: HTMLInputElement = document.querySelector("#alegriaIronFist")!;
const valorAlegriaIronFist: HTMLElement = document.querySelector("#valorAlegriaIronFist")!;

if (alegriaIronFist && valorAlegriaIronFist) {
  alegriaIronFist.addEventListener("input", () => {
    valorAlegriaIronFist.textContent = alegriaIronFist.textContent;
  });
}

const relajacionIronFist = document.querySelector("#relajacionIronFist")!;
const valorRelajacionIronFist = document.querySelector("#valorRelajacionIronFist")!;

if (relajacionIronFist && valorRelajacionIronFist) {
  relajacionIronFist.addEventListener("input", () => {
    valorRelajacionIronFist.textContent = relajacionIronFist.textContent;
  });
}

const nostalgiaIronFist = document.querySelector("#nostalgiaIronFist")!;
const valorNostalgiaIronFist = document.querySelector("#valorNostalgiaIronFist")!;

if (nostalgiaIronFist && valorNostalgiaIronFist) {
  nostalgiaIronFist.addEventListener("input", () => {
    valorNostalgiaIronFist.textContent = nostalgiaIronFist.textContent;
  });
}

//Los 4 valores de la canción 3

const energiaNoRoots = document.querySelector("#energiaNoRoots");
const valorEnergiaNoRoots = document.querySelector("#valorEnergiaNoRoots");

if (energiaNoRoots && valorEnergiaNoRoots) {
  energiaNoRoots.addEventListener("input", () => {
    valorEnergiaNoRoots.textContent = energiaNoRoots.textContent;
  });
}

const alegriaNoRoots = document.querySelector("#alegriaNoRoots");
const valorAlegriaNoRoots = document.querySelector("#valorAlegriaNoRoots");

if (alegriaNoRoots && valorAlegriaNoRoots) {
  alegriaNoRoots.addEventListener("input", () => {
    valorAlegriaNoRoots.textContent = alegriaNoRoots.textContent;
  });
}

const relajacionNoRoots = document.querySelector("#relajacionNoRoots");
const valorRelajacionNoRoots = document.querySelector("#valorRelajacionNoRoots");

if (relajacionNoRoots && valorRelajacionNoRoots) {
  relajacionNoRoots.addEventListener("input", () => {
    valorRelajacionNoRoots.textContent = relajacionNoRoots.textContent;
  });
}

const nostalgiaNoRoots = document.querySelector("#nostalgiaNoRoots");
const valorNostalgiaNoRoots = document.querySelector("#valorNostalgiaNoRoots");

if (nostalgiaNoRoots && valorNostalgiaNoRoots) {
  nostalgiaNoRoots.addEventListener("input", () => {
    valorNostalgiaNoRoots.textContent = nostalgiaNoRoots.textContent;
  });
}

const audioMyWay: HTMLAudioElement = document.querySelector("#audioMyWay")!; //Botón de play/pausa para la canción 1
const botonMyWay: HTMLElement = document.querySelector("#botonMyWay")!;

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

const progresoMyWay: HTMLInputElement = document.querySelector("#progresoMyWay")!; //Barra de audio para la canción 1

if (audioMyWay && progresoMyWay) {

  audioMyWay.addEventListener("timeupdate", () => {

    if (audioMyWay.duration > 0) {

      const porcentaje = (audioMyWay.currentTime / audioMyWay.duration) * 100;

      progresoMyWay.value = String(porcentaje);

    }

  });

}

if (audioMyWay && progresoMyWay) {

  progresoMyWay.addEventListener("input", () => {

    const porcentaje = Number(progresoMyWay.value);

    audioMyWay.currentTime = (porcentaje / 100) * audioMyWay.duration;

  });

}

const audioIronFist: HTMLAudioElement = document.querySelector("#audioIronFist")!; //Botón de play/pausa para la canción 2
const botonIronFist: HTMLElement = document.querySelector("#botonIronFist")!;

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

const progresoIronFist: HTMLInputElement = document.querySelector("#progresoIronFist")!; //Barra de audio para la canción 2

if (audioIronFist && progresoIronFist) {

  audioIronFist.addEventListener("timeupdate", () => {

    if (audioIronFist.duration > 0) {

      const porcentaje = (audioIronFist.currentTime / audioIronFist.duration) * 100;

      progresoIronFist.value = String(porcentaje);

    }

  });

}

if (audioIronFist && progresoIronFist) {

  progresoIronFist.addEventListener("input", () => {

    const porcentaje = Number(progresoIronFist.value);

    audioIronFist.currentTime = (porcentaje / 100) * audioIronFist.duration;

  });

}

const audioNoRoots: HTMLAudioElement = document.querySelector("#audioNoRoots")!; //Botón de play/pausa para la canción 3
const botonNoRoots: HTMLElement = document.querySelector("#botonNoRoots")!;

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

const progresoNoRoots: HTMLInputElement = document.querySelector("#progresoNoRoots")!; //Barra de audio para la canción 2

if (audioNoRoots && progresoNoRoots) {

  audioNoRoots.addEventListener("timeupdate", () => {

    if (audioNoRoots.duration > 0) {

      const porcentaje = (audioNoRoots.currentTime / audioNoRoots.duration) * 100;

      progresoNoRoots.value = String(porcentaje);

    }

  });

}

if (audioNoRoots && progresoNoRoots) {

  progresoNoRoots.addEventListener("input", () => {

    const porcentaje = Number(progresoNoRoots.value);

    audioNoRoots.currentTime = (porcentaje / 100) * audioNoRoots.duration;

  });

}