(function(){
	var placement_position="#placement_sensitivedata";
	var data = ["<h2><b>Sensitive Data</b></h2>",
		"<form>",
			"<p>IC Number :",                      
				"<input type='text' name='ic_number' id='ic_number' />",
			"</p>",
			"<p>Phone Number :",
				"<input type='text' name='phone_number' id='phone_number' />",
			"</p>",
			"<p>E-mail Address : ",
				"<input type='text' name='email_address' id='email_address' />",
			"</p>",			
			"<p>Office Address : ",
				"<input type='text' name='office_address' id='office_address' />",
			"</p>",
			"<p>Office Number : ",
				"<input type='text' name='office_number' id='office_number' />",
			"</p>",
		"</form>"].join("\n");

	$(placement_position).append(data);
})();




		