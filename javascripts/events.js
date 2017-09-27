"use strict";

const planets = require('./planets');

$('#showButton').mouseover(() => {
	// all the planets to show
	createDomString(planets.getPlanets());
});

const createDomString = (planetz) => {
	var planetString = '';
    for(var i=0; i<planetz.length; i++){
        var newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (strang) => {
	$('#planetHolder').html(strang);
};

$('body').on('click', '.planetImage', (event) => {
	$(event.target).prev().removeClass("hidden");
});

module.exports = {};