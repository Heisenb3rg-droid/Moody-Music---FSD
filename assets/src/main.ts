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
    valorAlegriaIronFist.textContent = alegriaIronFist.value;
  });
}

const relajacionIronFist: HTMLInputElement = document.querySelector("#relajacionIronFist")!;
const valorRelajacionIronFist: HTMLElement = document.querySelector("#valorRelajacionIronFist")!;

if (relajacionIronFist && valorRelajacionIronFist) {
  relajacionIronFist.addEventListener("input", () => {
    valorRelajacionIronFist.textContent = relajacionIronFist.value;
  });
}

const nostalgiaIronFist: HTMLInputElement = document.querySelector("#nostalgiaIronFist")!;
const valorNostalgiaIronFist: HTMLElement = document.querySelector("#valorNostalgiaIronFist")!;

if (nostalgiaIronFist && valorNostalgiaIronFist) {
  nostalgiaIronFist.addEventListener("input", () => {
    valorNostalgiaIronFist.textContent = nostalgiaIronFist.value;
  });
}

//Los 4 valores de la canción 3

const energiaNoRoots: HTMLInputElement = document.querySelector("#energiaNoRoots")!;
const valorEnergiaNoRoots: HTMLElement = document.querySelector("#valorEnergiaNoRoots")!;

if (energiaNoRoots && valorEnergiaNoRoots) {
  energiaNoRoots.addEventListener("input", () => {
    valorEnergiaNoRoots.textContent = energiaNoRoots.value;
  });
}

const alegriaNoRoots: HTMLInputElement = document.querySelector("#alegriaNoRoots")!;
const valorAlegriaNoRoots: HTMLElement = document.querySelector("#valorAlegriaNoRoots")!;

if (alegriaNoRoots && valorAlegriaNoRoots) {
  alegriaNoRoots.addEventListener("input", () => {
    valorAlegriaNoRoots.textContent = alegriaNoRoots.value;
  });
}

const relajacionNoRoots: HTMLInputElement = document.querySelector("#relajacionNoRoots")!;
const valorRelajacionNoRoots: HTMLElement = document.querySelector("#valorRelajacionNoRoots")!;

if (relajacionNoRoots && valorRelajacionNoRoots) {
  relajacionNoRoots.addEventListener("input", () => {
    valorRelajacionNoRoots.textContent = relajacionNoRoots.value;
  });
}

const nostalgiaNoRoots: HTMLInputElement = document.querySelector("#nostalgiaNoRoots")!;
const valorNostalgiaNoRoots: HTMLElement = document.querySelector("#valorNostalgiaNoRoots")!;

if (nostalgiaNoRoots && valorNostalgiaNoRoots) {
  nostalgiaNoRoots.addEventListener("input", () => {
    valorNostalgiaNoRoots.textContent = nostalgiaNoRoots.value;
  });
}

energiaMyWay.addEventListener("input", () => {
  canciones[0]!.energia = Number(energiaMyWay.value);
});

alegriaMyWay.addEventListener("input", () => {
  canciones[0]!.alegria = Number(alegriaMyWay.value);
});

relajacionMyWay.addEventListener("input", () => {
  canciones[0]!.relajacion = Number(relajacionMyWay.value);
});

nostalgiaMyWay.addEventListener("input", () => {
  canciones[0]!.nostalgia = Number(nostalgiaMyWay.value);
});

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

const progresoNoRoots: HTMLInputElement = document.querySelector("#progresoNoRoots")!; //Barra de audio para la canción 3

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

// Análisis y recomendaciones basadas en las elecciones de los usuarios sobre los 4 valores de la canción 1

const analizarMyWay: HTMLElement = document.querySelector("#analizarMyWay")!;
const resultadoMyWay: HTMLElement = document.querySelector("#resultadoMyWay")!;

analizarMyWay.addEventListener("click", () => {

  const energia = Number(energiaMyWay.value);
  const alegria = Number(alegriaMyWay.value);
  const relajacion = Number(relajacionMyWay.value);
  const nostalgia = Number(nostalgiaMyWay.value);

  let resultado = "";

  if (energia > 70 && alegria > 70 && relajacion < 40 && nostalgia < 50) {

    resultado = "Tu selección tiene un mood muy energético, alegre y activo. Te recomendamos: No Roots, THE IRON FIST y My Way.";

  } else if (energia > 70 && nostalgia > 70 && alegria < 50) {

    resultado = "Tu selección tiene un mood intenso y nostálgico. Te recomendamos: My Way, THE IRON FIST y No Roots.";

  } else if (energia < 30 && relajacion > 70 && nostalgia > 60) {

    resultado = "Tu selección tiene un mood tranquilo, relajado y nostálgico. Te recomendamos: My Way, No Roots y THE IRON FIST.";

  } else if (alegria > 70 && relajacion > 70 && energia < 60) {

    resultado = "Tu selección tiene un mood alegre y relajado. Te recomendamos: No Roots, My Way y THE IRON FIST.";

  } else if (energia > 70 && relajacion < 30) {

    resultado = "Tu selección tiene un mood intenso y con mucha energía. Te recomendamos: THE IRON FIST, No Roots y My Way.";

  } else if (nostalgia > 70 && alegria < 30) {

    resultado = "Tu selección tiene un mood principalmente nostálgico. Te recomendamos: My Way, No Roots y THE IRON FIST.";

  } else if (relajacion > 70) {

    resultado = "Tu selección tiene un mood relajado. Te recomendamos: My Way, No Roots y THE IRON FIST.";

  } else if (alegria > 70) {

    resultado = "Tu selección tiene un mood alegre. Te recomendamos: No Roots, My Way y THE IRON FIST.";

  } else if (energia < 30) {

    resultado = "Tu selección tiene un mood de baja energía. Te recomendamos: My Way, No Roots y THE IRON FIST.";

  } else {

    resultado = "Tu selección tiene un mood equilibrado. Te recomendamos explorar las tres canciones.";

  }

  resultadoMyWay.textContent = resultado;

});

//Análisis y recomendaciones basadas en las elecciones de los usuarios sobre los 4 valores de la canción 2



//Análisis y recomendaciones basadas en las elecciones de los usuarios sobre los 4 valores de la canción 3