"use strict";

let Mercury = require('./mercury');
let Venus = require('./venus');
let Earth = require('./earth');
let Mars = require('./mars');
let Jupiter = require('./jupiter');
let Saturn = require('./saturn');
let Uranus = require('./uranus');
let Neptune = require('./neptune');
let Pluto = require('./pluto');
let domElement = $('#planet-div');

// mercury.outputTo(domElement);

Mercury.outputTo(domElement);
Venus.outputTo(domElement);
Earth.outputTo(domElement);
Mars.outputTo(domElement);
Jupiter.outputTo(domElement);
Saturn.outputTo(domElement);
Uranus.outputTo(domElement);
Neptune.outputTo(domElement);
Pluto.outputTo(domElement);

