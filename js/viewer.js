$(document).ready(function(){
	
	$('.main_ul').children('li').each(function(){
		$(this).css('margin-bottom', '8px');
		$(this).css('line-height', '30px');
	});
	
	$('.viewer').each(function(){
		$(this).viewer();
	});
	$('.viewer_a').click(function(){
		$(this).next().find('img').click()
	});
	
});