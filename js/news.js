(function(){
	var placement_position="#placement_news";
	
	getFromServer("news","news_hooks",{"action":"list_news","catid":50, "slider":"yes"});
	
	$(document).on("news_hooks", function(event,data)
		{
			//console.log(data);

			for (var i=0;i<4;i++)
			{
				var cur_contid = "localStorage.contid="+data[i]["id"];
				var image;
				if (data[i]['image'] == null)
				{			
				image = "http://www.news.utm.my/timthumb.php?src=http://www.utm.my/dev/frontpage-generation/app/slider/default-image.jpg&w=960&h=400";
				}
				else
				{
				image = data[i]['image']
				}


				$(placement_position).append('<div class="row"><div class="col-md-4">'+"<img src='"+image+"' height='46' width='67'/>"+'</div>'+'<div class="col-md-8" ><div style="height: 28px; overflow:hidden">'+data[i]["title"]+'</div><div>'+'&#187; '+data[i]["date"]+'</div></div></div>'); 
				$("#placement_news .row div div:nth-child(2)").css("font-size","11px")
			}
				$(placement_position).append('<div style="position: absolute;bottom: -6px; right: 10px; font-size: 11px;">'+'<a href= "http://www.news.utm.my/">More News...</a>'+'<div style="position:absolute;top:11px;right:-22px;opacity:0.5; " class="ribbon_arrow"></div></div>');	
		});

})();
