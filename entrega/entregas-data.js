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

  // Ejemplo — bórralo o edítalo para tu primera entrega real:
  "ejemplo-entrega": {
    cliente: "Nombre del cliente",
    descripcion: "Video final — versión editada",
    // Este hash corresponde a la contraseña: demo123
    passwordHash: "d3ad9315b7be5dd53b31a273b3b3aba5defe700808305aa16a3062b76658a791",
    archivos: [
      { nombre: "Video final (MP4)", url: "https://drive.google.com/PON-AQUI-EL-LINK-DE-DRIVE" }
    ]
  }

  // Copia el bloque de arriba y pégalo aquí abajo para cada entrega nueva,
  // separándolos con una coma. Ejemplo:
  //
  // ,
  // "omcontandosoluciones-video-2": {
  //   cliente: "Omcontandosoluciones",
  //   descripcion: "Video corporativo — versión final",
  //   passwordHash: "...",
  //   archivos: [
  //     { nombre: "Video final (MP4)", url: "https://drive.google.com/..." },
  //     { nombre: "Miniatura (JPG)", url: "https://drive.google.com/..." }
  //   ]
  // }

};
