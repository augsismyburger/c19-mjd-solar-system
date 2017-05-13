"use strict";

let data = {
    "name" : "Saturn",
    "discovered" : 1610,
    "mass" : "5.683e26 kg",
    "size" : "116464 km",
    "distance" : "1.429e9",
    "atmosphere" : "Hydrogen and Helium",
    "satelites" : 62,
    "visitors" : "Pioneer 11, Voyager 1, Voyager 2, Cassini-Huygens."
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
