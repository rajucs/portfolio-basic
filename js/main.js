$(document).ready(function(){
	$('#ar_dots').delay(1300).fadeOut(300,function(){
		$('#ar_bg_left').animate({left:'-50%'},300);
		$('#ar_bg_right').animate({left:'-50%'},300,function(){
			$('#ar_preloader').fadeOut(10);
		});
	});
});
