(function(){
	var placement_position="#placement_sensitivedata";
	var data = ["<h2><b>Sensitive Data</b></h2>",
		"<form>",
			"<p>IC Number :",                      
				"<input type='text' name='ic_number' id='ic_number' class='form-control' placeholder='Enter IC number'/>",
			"</p>",
			"<p>Phone Number :",
				"<input type='text' name='phone_number' id='phone_number' class='form-control' placeholder='Enter phone number'/>",
			"</p>",
			"<p>E-mail Address : ",
				"<input type='text' name='email_address' id='email_address' placeholder='Enter email address'/>",
			"</p>",			
			"<p>Office Address : ",
				"<input type='text' name='office_address' id='office_address' class='form-control' placeholder='Enter office address'/>",
			"</p>",
			"<p>Office Number : ",
				"<input type='text' name='office_number' id='office_number' class='form-control' placeholder='Enter office number'/>",
			"</p>",
		"</form>"].join("\n");

	$(placement_position).append(data);
})();




		