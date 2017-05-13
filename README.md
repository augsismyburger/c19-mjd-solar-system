# Solar System Info with Browserify

Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/mjd/solar-system && cd $_
Use npm to install Browserify, and any other packages you need to compile your modules.
Make sure you have the Grunt task running that will build the distribution bundle file.
Requirements

You'll be creating a web page that will display important scientific data about all eight planets in our solar system. The information about each planet will be separate modules.

Each module will export a single function named outputTo that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.

function outputTo(domElement) {
  domElement.append(...);
}
Each module should output the following information.

Name
Year discovered
Mass
Size
Distance from Sun
Atmosphere composition
Satellites
Name of any probes/orbiters/explorers that have visited or landed on that planet
Create a main module that uses require to include each planet's module as a dependency and then subsequently calls the outputTo() method for each one, in the right order.

Bonus stretch goal

Once you've got the basic implementation working, find a way to have the outputTo() only defined once, and still be able to output each planet's information to the DOM. It can't be defined in the main module.
