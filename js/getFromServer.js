jsonURL = "http://www.utm.my/api";
function getFromServer(type_get,hooks,parameter)
    {
    parameter['type'] = type_get;
    jQuery.ajax({
        url: jsonURL,
        dataType: 'jsonp',
        data:parameter,
        jsonp:'callback',
        timeout:20000,
        success:function(data){
		//console.dir(data);              
            if (data.length > 1)
                {
                // if data is sent (not Array(data)), only the first item in array will be sent.
                // this is to ensure we sent everything
                jQuery(document).triggerHandler(hooks,Array(data));
                }
			else
				{
				jQuery(document).triggerHandler(hooks,data);
				}
            },
        
        });
    }