/*

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "mally",
		password: "asas"
	},
	{
		username: "kali",
		password: "bsbs"
	}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	];
	var userNamePrompt= prompt("whats your username?");
	var passwordPrompt= prompt("whats yoyr password?");
	function isUserValid(username,password){
		for(var i=0;i< database.length;i++)
		{
			if(database[i].username === username && database[i].password === password)
			{
				return true;
			}
			
		}
		return false;
	}
	function signIn(username, password)
	{
		//console.log(isUserValid(username,password));
		if(isUserValid(username,password)) {
			console.log(newsfeed);
		} 
		else
		{
			alert('sorry');
		}
		//	console.log(newsfeed);
		//}
		//else
		//{
		//	alert("sorry wrong username and password");
		//}
	}
	signIn(userNamePrompt,passwordPrompt);
	*/
//	var button= document.getElementsByTagName("button")[0];
	//button.addEventListener("mouseenter",function(){
	//	console.log("click!!!")
	//});
	var button = document.getElementById("enter");
	var input=document.getElementById("userinput");
	var ul=document.querySelector("ul");
	function inputLength(){
		return input.value.length;
	}
	function createListElement(){
			var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
	function addListAfterClick(){
		if (inputLength() > 0) {
			createListElement();
	}
	}
	function addListAfterKeyPress(event){
		if (inputLength()>0 && event.keyCode===13) {
			createListElement();
		}
	}
	button.addEventListener("click",addListAfterClick);
		input.addEventListener("keypress",addListAfterKeyPress);