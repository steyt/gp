//Паралакс
var section = $('.first');
$(window).scroll(function () {
	var scrollTop = -($(window).scrollTop()),
		speed = section.data('speed'),
		coords = "50%" + scrollTop / speed + "px";
	section.css('background-position', coords);
});

//ParallaxJS
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


//google maps
function initialize() {
	var latlng = new google.maps.LatLng(50.450093, 30.505468);
	var settings = {
		zoom: 15,
		center: latlng,
		scrollwheel: false,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Hogenhaug</h1>'+
		'<div id="bodyContent">'+
		'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	var companyImage = new google.maps.MarkerImage('img/logoog.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyShadow = new google.maps.MarkerImage('img/logoog_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));

	var companyPos = new google.maps.LatLng(50.450093, 30.505468);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Hogenhaug",
		zIndex: 3});
	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});
}