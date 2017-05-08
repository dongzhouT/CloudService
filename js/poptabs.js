$(function() {

//click hover
	$('.pop-sub-title li').click(function() {
		$('.pop-sub-title li').removeClass('pop-active');
		$(this).addClass('pop-active');
		var index = $(this).index();
		$('#hangye-content').children().hide();
		$('#hangye-content').children().eq(index).show();
	});
	$('.pop-sub-title li').eq(0).addClass('pop-active');
	//	$('#hangye-content').children().hide();
	//	$('#hangye-content').children().eq(0).show();
});