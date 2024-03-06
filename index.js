(function () {
  const img = document.querySelector("#gif-img");
  img.setAttribute(
    "src",
    "https://media1.tenor.com/m/A46HlGnstykAAAAC/doge-dancing-like-a-king.gif"
  );

  const form = document.querySelector("form");
  const searchBox = document.querySelector("#search-box");
  console.log(searchBox.value);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!searchBox.value == "") {
      genGif();
    }
  });
})();

function genGif() {
  const img = document.querySelector("#gif-img");
  const encodedSearchValue = encodeURIComponent(
    document.querySelector("#search-box").value
  );
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=dWOvpluH6YNYSVI1sX7BHZfuq64sVBWF&s=${encodedSearchValue}&limit=1`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network reponse was not ok");
      }
    })
    .then((response) => {
      console.log(response);
      const imageUrl = response.data.images.original.url;
      img.setAttribute("src", imageUrl);
    })
    .catch((error) => {
      alert(error);
    });
}
