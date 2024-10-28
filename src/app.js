import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainResult = [".es", ".net", ".io", ".org"];

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainResult = [".es", ".net", ".io", ".org"];

  let generatedDomains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domainResult.length; l++) {
          generatedDomains.push(
            pronoun[i] + adj[j] + noun[k] + domainResult[l]
          );
        }
      }
    }
  }

  const domainList = document.getElementById("domain-list");
  generatedDomains.forEach(domain => {
    const div = document.createElement("div");
    div.textContent = domain;
    domainList.appendChild(div);
  });
};
