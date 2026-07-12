// ============================================================
// ARCHIVO DE ENTREGAS — Luis José Digital
// ============================================================
// Aquí agregas una entrada nueva cada vez que quieras entregarle
// algo a un cliente. NO subas los videos/fotos aquí — eso va en
// Google Drive. Aquí solo va el LINK de Drive + la contraseña
// ya convertida en código (hash), nunca la contraseña en texto plano.
//
// Para generar el "passwordHash" de una contraseña nueva, abre
// el archivo generar-contrasena.html (NO lo subas a GitHub,
// ábrelo solo en tu computador) y pega ahí la contraseña que
// quieras usar para ese cliente.
// ============================================================

const ENTREGAS = {

  "olga-murillo-videos": {
    cliente: "Olga Murillo",
    descripcion: "Tus 2 videos — versión final",
    passwordHash: "02fe293f02f99bbce64db9e3a15cf8c774c7437b1228d58a64a550a4470f9bbc",
    archivos: [
      { nombre: "Video 1", url: "https://drive.google.com/file/d/17a4spoBXMmQ58fr2OQ8kzFZHX-cd3SRj/view?usp=drivesdk" },
      { nombre: "Video 2", url: "https://drive.google.com/file/d/1jaId19mp-Z0UJ_BaL9PfCfb3WSfPt7z9/view?usp=drivesdk" }
    ]
  }

  // Copia el bloque de arriba y pégalo aquí abajo para cada entrega nueva,
  // separándolos con una coma. Ejemplo:
  //
  // ,
  // "otro-cliente-video": {
  //   cliente: "Nombre",
  //   descripcion: "Descripción del trabajo",
  //   passwordHash: "...",
  //   archivos: [
  //     { nombre: "Video final (MP4)", url: "https://drive.google.com/..." }
  //   ]
  // }

};
