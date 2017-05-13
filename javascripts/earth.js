"use strict";

let data = {
    "name" : "Earth",
    "discovered" : 0,
    "mass" : "5.97237e24 kg",
    "size" : "6371.0 km",
    "distance" : "1.495982e8 km",
    "atmosphere" : "Nitrogen and Oxygen",
    "satelites" : 1,
    "visitors" : "Life"
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
