"use strict"

$(function () {

	let currentFloor = 2;
	let floorPath = $('.home-image path');
	let counterUp = $('.counter-up');
	let counterDown = $('.counter-down');
	
	let modal = $('.modal');
	let modalCloseButton = $('.modal-close-button');
	let buttonPrimary = $('.button-primary');
	let flatNums = document.querySelectorAll('.flat-num');
	let flatPath = $('.modal-image path');
	let flatLinks = $('.flat-link');
	

	floorPath.on('mouseover', function () {
		floorPath.removeClass('current-floor');
		currentFloor = $(this).attr('data-floor');
		$('.counter').text(currentFloor);
		for(let item of flatNums){
			item.innerText = (+currentFloor) + item.parentElement.dataset.flat;
		}		
	});
	
	flatPath.on('mouseover', selectFlat);
	flatLinks.on('mouseover', selectFlat);
	
	
	floorPath.on('click', toggleModal);	
	modalCloseButton.on('click', toggleModal);
	buttonPrimary.on('click', toggleModal);

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
	
	function selectFlat(){
		let currentFlat = $(this).attr('data-flat');
		$(`.flat-link`).removeClass('flat-link-active');
		$(`.flat-link[data-flat=${currentFlat}]`).addClass('flat-link-active');
		$(`.flats path`).removeClass('flat-path-active');
		$(`.flats path[data-flat=${currentFlat}]`).addClass('flat-path-active');		
	}	
	
	function toggleModal(){		
		modal.toggleClass('is-open');
	};
	
});