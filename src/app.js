/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["auto", "perro", "gato"];
  let accion = ["serviciodemecanica", "delasmudansas", "restaurat"];
  let donde = ["sevilla", "madrid", "accion"];

  function generateDominio() {
    let randomquien = quien[Math.floor(Math.random() * quien.length)];
    let randomaccion = accion[Math.floor(Math.random() * accion.length)];
    let randomdonde = donde[Math.floor(Math.random() * donde.length)];

    const dominio = `${randomquien}${randomaccion}${randomdonde}.Com.es`;
    console.log(document.getElementById("dominio"));
    document.getElementById("dominio").innerHTML = dominio;
  }
  document
    .getElementById("generateDominioBtn")
    .addEventListener("click", generateDominio);
  console.log("Generador inicializado!");
};
