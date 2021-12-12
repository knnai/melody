"use strict"

$(function () {

	let currentFloor = 2;
	let floorPath = $('.home-image path');
	let counterUp = $('.counter-up');
	let counterDown = $('.counter-down');

	floorPath.on('mouseover', function () {
		floorPath.removeClass('current-floor');
		currentFloor = $(this).attr('data-floor');
		$('.counter').text(currentFloor);
	});

	counterUp.on('click', function () {
		currentFloor++;
		if (currentFloor > 18) currentFloor = 2;
		let strCurFloor = ('0' + currentFloor).slice(-2);
		$('.counter').text(strCurFloor);
		floorPath.removeClass('current-floor');
		$(`[data-floor = ${strCurFloor}]`).toggleClass('current-floor');
	});

	counterDown.on('click', function () {
		currentFloor--;
		if (currentFloor < 2) currentFloor = 18;
		let strCurFloor = ('0' + currentFloor).slice(-2);
		$('.counter').text(strCurFloor);
		floorPath.removeClass('current-floor');
		$(`[data-floor = ${strCurFloor}]`).toggleClass('current-floor');
	});
});