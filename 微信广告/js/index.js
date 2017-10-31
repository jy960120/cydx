$(function () {
	$(".meau").click(function() {
		$(this).css("display","none");
		$(".meaudiv").css("display","block");
	})
	$(".meau2").click(function() {
		$(".meaudiv").css("display","none");
		$(".meau").css("display","block");
	})
})