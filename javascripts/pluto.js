"use strict";

let data = {
    "name" : "Pluto",
    "discovered" : 1930,
    "mass" : "1.30900e22 kg",
    "size" : "1187 km",
    "distance" : "5.7368e9 km",
    "atmosphere" : "Nitrogen, Methane and Carbon Dioxide",
    "satelites" : 5,
    "visitors" : "New Horizons"
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
