// ============================================================
// ARCHIVO DE ENTREGAS — Luis José Digital
// ============================================================
// Este archivo almacena las entregas de forma cifrada. Los enlaces
// de Drive no quedan visibles en texto claro: se desencriptan solo
// cuando el cliente ingresa la contraseña correcta.
//
// Para agregar una entrega, utiliza la herramienta
// "generar-entrega.html" que está en la misma carpeta.
// Copia el bloque generado en este archivo y publícalo en GitHub.
//
// No subas contraseñas reales al repositorio.
// ============================================================

const DELIVERIES = {
  "olga-murillo-videos": {
    salt: "MHUejjJ1iAeAqz+JRnFriw==",
    iv: "rYpevkwxE5FFrcIQ",
    payload: "++0idjolxBuR8d4e4+tqyjwDp3H7Y0CKN0vXRnqEVK4Dkb7Ral54040S0DRcGft7xYjJdgGe3EMjF4CHvu62qV1+Vq36qD2fnof6PLcgxquxxR/HMTKvZA+NIR6dZL0DgR2/BxeQ5Ld7LJlnRuZLkNgs/U/G2zZoTDMLg97ZTqHDc7W+NyuKOyye5tq4xn7rdVbAjKVQATOXVgFmYQwzhvw4V6itQvyupFftDjTp01Q7Y/pRcUt375tguigrad+ExC/AIuDJsAjp6q7I+yjIo5hTgpAxsqAPcfXu2yoaCiIUXHkqFCDI/ys1sqrRagEJ0T8qfsqdi7cOaHJ7NufqtmGN5FMsETmC1zqaJbbBj8JMMOnly17lBl8RO3zpYa5EnAFMBaKxIpnvXYPRDTjx0AFvI+ERguE1QPVj9DzvXMLzmQmTjY0khHs="
  }

  // Añade nuevas entregas con este formato:
  // ,
  // "mi-entrega-segura": {
  //   salt: "...",
  //   iv: "...",
  //   payload: "..."
  // }
};
