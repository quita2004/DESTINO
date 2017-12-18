/* Add Custom Code Jquery
 ========================================================*/
$(document).ready(function(){
	// Messenger posmotion
	$(".nav-container").click(function () {
		if($('.navigation').hasClass('open'))
			$('.navigation').removeClass('open');
		else
			$('.navigation').addClass('open');
	}); 
	
	
});
