"use strict";

let data = {
    "name" : "Jupiter",
    "discovered" : 0,
    "mass" : "1.8981e27 kg",
    "size" : "6.9911e4 km",
    "distance" : "7.7834e8 km",
    "atmosphere" : "Hydrogen and Helium",
    "satelites" : 53,
    "visitors" : "Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, Ulysses, New Horizons, Juno"
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
