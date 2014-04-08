var username = "misterpah";
var clientid = "70430fc6973df6a443ebdb10328d0a8b67568825";

/*This function receive :
	1.username 
	2.clientid 
and give output json.

*/ 
function call_api_about_me(username,clientid){
	var url = "https://api.about.me/api/v2/json/user/view/"+username+"?client_id="+clientid;
	jQuery.ajax({
        url: url,
        dataType: 'jsonp',
        jsonp:'callback',
        timeout:20000,
        success:function(data){
		console.dir(data);
            if (data.length == 1)
                {
                jQuery(document).triggerHandler(hooks,data);
                }                
            else if (data.length > 1)
                {
                // if data is sent (not Array(data)), only the first item in array will be sent.
                // this is to ensure we sent everything
                jQuery(document).triggerHandler(hooks,Array(data));
                }
            },
        
        });
}

call_api_about_me(username, clientid) ;