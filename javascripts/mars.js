"use strict";

let data = {
    "name" : "Mars",
    "discovered" : 0,
    "mass" : "6.4171e23 kg",
    "size" : "3,396.2 km",
    "distance" : "2.27943e8",
    "atmosphere" : "Carbon Dioxide, Argon and Nitrogen",
    "satelites" : "Phobos and Deimos",
    "visitors" : "Phobos-Grunt, Yinghuo-1, Phoenix, Mars Exploration Rover Spirit, Mars Polar Lander, Nozomi, Mars Climate Orbiter, Mars Pathfinder & Sojourner, Mars 96, Mars Global Surveyor, Mars Observer, Phobos 2, Phobos 1, Viking program, Mars 4, 5, 6, & 7, Mars 2 & 3, Mariner 9, Kosmos 419, Mariner 8, Mars 1969, Mariner 6 & 7, Zond 2, Mariner 4, Mariner 3, Mars 1, Korabl 11 & 13, Korabl 4 & 5"
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
