const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

async function reload() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const section = document.querySelector("section");
  section.innerHTML = "";

  for (let image in data) {
    section.innerHTML += `
        <figure>
            <img src=${data[image].url} alt="Descripción de la imagen">
            <figcaption>Image ID:<mark> ${data[image].id} </mark></figcaption>
        </figure>
    `;
  }
}

reload(); // Carga 10 imagenes en cuanto se ejecuta el script
