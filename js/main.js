$(document).ready(function(){

	$('.box2').hide();
	$('#feature').click(function(){
		$('.fa-angle-double-down').addClass('rotate');
		$('.box2').toggle();
	})
})