(()=>{"use strict";const e=document.querySelector("#joke"),t=document.querySelector("#getAnotherJoke");async function o(){const t=await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"),o=(await t.json()).joke;e.textContent=o}console.log(t),window.onload=o(),t.addEventListener("click",o)})();