var movies = [
	{
		name: "The Departed",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Disaster Movie",
		rating: 1,
		hasWatched: false
	},
	{
		name: "Superbad",
		rating: 4,
		hasWatched: true
	},
	{
		name: "Frozen",
		rating: 3.5,
		hasWatched: false
	}
]

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	} 
	result += "\"" + movie.name + "\" - ";
	result += movie.rating
	console.log(result);
})
