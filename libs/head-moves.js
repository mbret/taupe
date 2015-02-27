var maxX = 0;
var minX = 0;
var caca = false;

var teteADroiteDetecte = false;
var teteAGaucheDetecte = false;

var teteADroite = false;
var teteAGauche = false;

var VITESSE_SCROLL = 20;

var HeadMove = {
    onLeftScroll: null,
    onRightScroll: null
};

function resetX() {
      
	if(maxX > 5 && minX > -2){

		console.log("droite");
		if(teteADroiteDetecte && !teteADroite)
			teteADroite = true;

		if(!teteADroiteDetecte)
			teteADroiteDetecte = true;
	}
	else{
		teteADroiteDetecte = false;
		teteADroite = false;
		// teteADroiteConfirme = false;
	}

	if(minX < -5 && maxX < 2){

		console.log("gauche");
		if(teteAGaucheDetecte && !teteAGauche)
			teteAGauche = true;

		if(!teteAGaucheDetecte)
			teteAGaucheDetecte = true;
	}
	else{
		teteAGaucheDetecte = false;
		teteAGauche = false;
		// teteAGaucheConfirme = false;
	}
       maxX = 0;
       minX = 0;
       caca = false;
   }

var timerSecoue=setInterval("resetX()", 1000);

var videoInput = document.getElementById('vid');
var canvasInput = document.getElementById('compare');
var canvasOverlay = document.getElementById('overlay')
var debugOverlay = document.getElementById('debug');
var overlayContext = canvasOverlay.getContext('2d');
canvasOverlay.style.position = "absolute";
canvasOverlay.style.top = '0px';
canvasOverlay.style.zIndex = '100001';
canvasOverlay.style.display = 'block';
debugOverlay.style.position = "absolute";
debugOverlay.style.top = '0px';
debugOverlay.style.zIndex = '100002';
debugOverlay.style.display = 'none';

var htracker = new headtrackr.Tracker();
htracker.init(videoInput, canvasInput);
htracker.start();

document.addEventListener("headtrackingEvent", function( event ) {

    if(event.x < minX)
    minX = event.x;
    if(event.x > maxX)
    maxX = event.x;

    if(maxX > 2 && minX < -2){
    caca = true;
        console.log("caca");
    }

    if(event.x < 5){
    teteADroiteDetecte = false;
    teteADroite = false;
    // teteADroiteConfirme = false;
    }

    if(event.x > -5){
    teteAGaucheDetecte = false;
    teteAGauche = false;
    // teteAGaucheConfirme = false;
    }

    if(teteADroite){
        console.log('Head move -> scroll right');
        HeadMove.onRightScroll();
    }

    if(teteAGauche){
        console.log('Head move -> scroll left');
        HeadMove.onLeftScroll();
    }
});

Window.HeadMove = HeadMove;