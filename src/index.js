import "./styles/style.scss";

const api_url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

const jokeH1 = document.querySelector("#joke");
const button = document.querySelector("#getAnotherJoke");
console.log(button);
async function getJoke() {
  const response = await fetch(api_url);
  const data = await response.json();
  const joke = data.joke;
  jokeH1.textContent = joke;
}

window.onload = getJoke();
button.addEventListener("click", getJoke);
