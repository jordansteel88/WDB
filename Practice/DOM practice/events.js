var firstLi = document.querySelectorAll("li")[0];
var secondLi = document.querySelectorAll("li")[1];
var thirdLi = document.querySelectorAll("li")[2];
var allLis = document.querySelectorAll("li");

for (var i = 0; i < allLis.length; i++) {
	allLis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	})
	allLis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	})
	allLis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	})
};