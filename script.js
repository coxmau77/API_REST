const API_URL = "https://api.thecatapi.com/v1/images/search";

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const img = document.querySelector("img");
  img.src = data[0].url;
}

reload(); // Carga una imagen en cuanto se ejecuta el script
