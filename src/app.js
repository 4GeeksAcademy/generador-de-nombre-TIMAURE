/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  let pronoun = ["el", "our"];
  
  let adj = ["mejor", "grande"];
  
  let noun = ["taller", "quipo", "fuerza"];

  let extension = [".com", ".es", ".net", ".org", ".Ve", ".uy"];

  
  let nombreDeDominio = [];

 for (let p = 0; p < pronoun.length; p++){
  for (let a = 0; a < adj.length; a++){
    for(let n = 0; n< noun.length; n++){
     for (let e = 0; e < extension.length; e++){
      nombreDeDominio.push(pronoun[p] + adj[a] + noun[n] + extension[e]);
     }
    }
  }
}

 console.log(domainNames);
};