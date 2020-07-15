/*check off to-dos by clicking*/
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

/*assign functionality to X press*/
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

/*allow adding to-dos*/
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
	var todoText = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})