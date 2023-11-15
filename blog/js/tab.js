$(document).ready(function(e){
	$(document).on("click",".tab-list a",function(e){
		e.preventDefault();
		var thisHref = $(this).attr("href");
		$(this).parents("section").find(".tab-list li").removeClass("active");
		$(this).parents("li").addClass("active");
		$(this).parents("section").find(".tab-info").removeClass("active");
		$(thisHref).addClass("active");
	});
});