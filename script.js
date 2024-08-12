const URL = "https://api.thecatapi.com/v1/images/search";
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const img = document.querySelector("img");
    img.src = data[0].url;
  });
