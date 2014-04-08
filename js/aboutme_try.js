(function(){
var placement_aboutme="#placement_aboutme";
		getFromServer("about-me","aboutme_hooks",{"username":"misterpah"});
		$(document).on("aboutme_hooks", function(event,data)
			{
			console.dir(data);
			$(placement_aboutme).append('<div class="Row">'+'<b>'+data["display_name"]+'</b><br>User name is <b>'+data["user_name"]+'</b><br>Bio is '+data["bio"]+'<br>Visit '+data["profile"]+' for more info</div>');  
			});
		})();