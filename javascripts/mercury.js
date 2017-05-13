"use strict";

let data = {
    "name" : "Mercury",
    "discovered" : 0,
    "mass" : "3.30e23 kg",
    "size" : "2,439.7 km",
    "distance" : "57,910,000 km",
    "atmosphere" : "Hydrogen, Helium, Sodium and Oxygen.",
    "satelites" : "none",
    "visitors" : "Mariner 10 and Messenger"
};

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
