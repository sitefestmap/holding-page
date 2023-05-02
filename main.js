import './main.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

document.addEventListener("DOMContentLoaded", function() {

	const toggleBtns = document.querySelectorAll('.dark-mode-toggle-btn');
	const body = document.querySelectorAll('body');
	const header = document.querySelectorAll('.header');
	const logoGlow = document.querySelectorAll('.logo-glow');
	const darkModeImg = document.querySelectorAll('.darkmodeimg');
	const moon = document.querySelectorAll('.moon');
	const moonGlow = document.querySelectorAll('.moonglow');
	const moonSpots = document.querySelectorAll('.spots');
	const moonCover = document.querySelectorAll('.mooncover');
	const darkModeP = document.querySelectorAll('.darkmodep');
	const background = document.querySelectorAll('.background');
	const intro = document.querySelectorAll('.intro');
	const introHead = document.querySelectorAll('.introhead');
	const scrollSection1 = document.querySelectorAll('.scroll-section1');
	const scrollSection2 = document.querySelectorAll('.scroll-section2');
	const scrollSection3 = document.querySelectorAll('.scroll-section3');
	const scrollSection4 = document.querySelectorAll('.scroll-section4');
	const slides = document.querySelectorAll('.slide');
	const slide1 = document.querySelectorAll('.slide1-1');
	const intro1 = document.querySelector('.intro1');
	const intro2 = document.querySelector('.intro2');
	const prev = document.querySelectorAll('.prev');
	const next = document.querySelectorAll('.next');
	const linesRect = document.querySelectorAll('.lines-rect');
	const text2 = document.querySelectorAll('.text-2');
	const mySlides = document.querySelectorAll('.mySlides');
	const slideshow = document.querySelector('.slideshow-container');
	const facebookIcon = document.querySelector('.facebook-icon');
	const instagramIcon = document.querySelector('.instagram-icon');
	const twitterIcon = document.querySelector('.twitter-icon');
	const siteFestBtn = document.querySelectorAll('.site-fest-btn');
	const slidesTextDark = document.querySelectorAll('.slides-text-dark');
	const slidesTextLight = document.querySelectorAll('.slides-text-light');
	const holdingpageIntro = document.querySelectorAll('.holdingpage-intro');
	const holdingpageIntroP = document.querySelectorAll('.holdingpage-introp');

	var dots = document.getElementsByClassName("dot");
	let touchstartX = 0;
	let touchendX = 0;
	let isDarkMode;


	toggleBtns.forEach(function(btn) {
	    btn.addEventListener('click', function() {
	        toggleDarkMode();
	    });
	});


  const darkModeCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('dark-mode='));
	if (darkModeCookie) {
		console.log(darkModeCookie);
	  isDarkMode = darkModeCookie.split('=')[1] === 'true';
	  const body = document.querySelector('body');
	  if (isDarkMode) {
	  document.documentElement.classList.add('disable-transition');
	  toggleDarkMode();
	  setTimeout(function() {
	    document.documentElement.classList.remove('disable-transition');
	  }, 250);
	}
	}

if (window.location.pathname === '/' || window.location.pathname === '') {
  window.location.replace('/index.html');
}	

if (document.querySelector('.map-site-btn')) {
	document.querySelector('.map-site-btn').addEventListener('click', saveAndChangePage);
	document.querySelector('.map-site-btn2').addEventListener('click', saveAndChangePage);
}
if (document.querySelector('.map-site-btn3')) {
	document.querySelector('.map-site-btn3').addEventListener('click', saveAndChangePage);	

}

toggleBtns.forEach(function(btn) {
  btn.addEventListener('mouseover', function(event) {
    if (event.type === 'mouseover') {
	  moonGlow.forEach(function(moonGlow) {
	  	moonGlow.classList.add('hover');
	  });
    } else if (event.type === 'mouseout') {
	  moonGlow.forEach(function(moonGlow) {
	  	moonGlow.classList.remove('hover');
	  });
    }
  });
});



function saveAndChangePage() {
  isDarkMode = document.documentElement.classList.contains('dark-mode');
  document.cookie = `dark-mode=${isDarkMode}; path=/`;
  
  if (document.querySelector('.map-site-btn3')) {
  	window.location.href = 'index.html';
  } else {
  	window.location.href = 'index2.html';
  }
}


	function toggleDarkMode() {
	  
	const darkModeElements = [
	  ...body,
	  ...header,
	  ...background,
	  ...logoGlow,
	  ...moonGlow,
	  ...toggleBtns,
	  ...intro,
	  ...scrollSection1,
	  ...scrollSection2,
	  ...scrollSection3,
	  ...scrollSection4,
	  ...introHead,
	  ...mySlides,
	  ...slide1,
	  ...prev,
	  ...next,
	  ...linesRect,
	  ...text2,
	  ...slidesTextDark,
	  ...slidesTextLight,
	  ...holdingpageIntro,
	  ...holdingpageIntroP
	];

  	  document.documentElement.classList.toggle('dark-mode');
	  isDarkMode = document.documentElement.classList.contains('dark-mode');
	  document.cookie = `dark-mode=${isDarkMode}; path=/`;
	  //darkModeImg.classList.toggle('dark-mode');
		if (intro1 && intro2) {
		  intro1.classList.toggle('dark-mode');
		  intro2.classList.toggle('dark-mode');
		  facebookIcon.classList.toggle('dark-mode');
		  instagramIcon.classList.toggle('dark-mode');
		  twitterIcon.classList.toggle('dark-mode');		  
		}

		darkModeElements.forEach(function(element) {
		  element.classList.toggle('dark-mode');
		});


		  if (isDarkMode) {
			  darkModeP.forEach(function(darkModeP) {
			  	darkModeP.textContent = 'Dark Mode:';
			  });
			  moon.forEach(function(moon) {
			  	moon.classList.remove('light-mode');
			  });
			  moonCover.forEach(function(moonCover) {
			  	moonCover.classList.remove('light-mode');
			  });
	  		moonSpots.forEach(function(spot) {
			 spot.classList.remove('light-mode');
		    });
		  } else {
			  darkModeP.forEach(function(darkModeP) {
			  	darkModeP.textContent = 'Light Mode:';
			  });
			  moon.forEach(function(moon) {
			  	moon.classList.add('light-mode');
			  });
			  moonCover.forEach(function(moonCover) {
			  	moonCover.classList.add('light-mode');
			  });
	  		moonSpots.forEach(function(spot) {
			 spot.classList.add('light-mode');
		    });

		  }
	}
