"use strict";

let data = {
    "name" : "Neptune",
    "discovered" : 1846,
    "mass" : "1.0241e26 kg",
    "size" : "2.4622e4 km",
    "distance" : "4.4983e9 km",
    "atmosphere" : "Hydrogen, Helium and Methane",
    "satelites" : 27,
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
