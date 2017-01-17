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
