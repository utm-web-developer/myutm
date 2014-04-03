(function(){
var placement_event="#placement_event";
		getFromServer("events","event_hooks",{});
		$(document).on("event_hooks", function(event,data)
			{
				console.dir(data);
				console.log(data);
		
			for (var i=0;i<data.length;i++)
			{ 
				$(placement_event).append('<div class="Row">'+'<b>'+data[i][0]+'</b><br>'+data[i][1]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data[i][2]+'<br></div>');  
			}
				});
		})();