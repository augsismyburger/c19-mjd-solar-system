"use strict";

let data = {
    "name" : "Venus",
    "discovered" : 0,
    "mass" : "4.8675e24 kg",
    "size" : "6,051.8 km",
    "distance" : "1.08209e8 km",
    "atmosphere" : "Carbon Dioxide and Nitrogen",
    "satelites" : 0,
    "visitors" : "Mariner 2, Venera 4, Venera 9, Venera 10, Venera 13, Venera 14, Venera 15, Venera 16, Pioneer, Venus Express, Akatsuki"
}

let toWrite = `<div class='row'>
                <h1>${data.name}</h1>
                <h5>Discovered: ${data.discovered}</h5>
                <h5>Mass: ${data.mass}</h5>
                <h5>Size in Radius: ${data.size}</h5>
                <h5>Distance from the Sun: ${data.distance}</h5>
                <h5>Atmosphere Make-up: ${data.atmosphere}</h5>
                <h5>Satelites: ${data.satelites}</h5>
                <h5>Missions: ${data.visitors}</h5>
                </div>`;

function outputTo(domElement) {
  domElement.append(toWrite);
}

module.exports = {outputTo};
