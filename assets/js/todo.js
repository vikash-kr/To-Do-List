//alert("connected")
//Click Effect
$("li").click(function(){
	//alert("Clicked LI");
	$(this).css("color", "red");
});
//click X to delete
$("span").click(function(event){
	$(this).parent().fadeOut().remove();
	alert("Deleated");
	event.stopPropagation();

});
