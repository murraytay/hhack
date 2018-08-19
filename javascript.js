var actionArray = ['Call your senator', 'Talk to your neighbor about something you feel passionate about',
'Send a letter to your representative', 'do some self care', 'make political art and hang it up', 'raise money for a cause',
'find a group of people around you with similar beliefs'
]


function newAction (){
	var randomNumber = Math.floor(Math.random() * (actionArray.length));
	document.getElementById('ActionDisplay').innerHTML = actionArray[randomNumber];

}