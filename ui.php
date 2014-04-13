<!doctype html>
<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>My UTM</title>
	    <script src="js/jquery-1.11.0.min.js"></script>
	    <!-- Main CSS -->
		<link rel="stylesheet" href="css/style.css">

	    <!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

		<!-- Optional theme -->
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

		<!-- Latest compiled and minified JavaScript -->
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	</head>
    <body style="">

	    
	<div class="navbar navbar-inverse" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">My UTM</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a id="fb" href="#">Facebook</a></li>
            <li><a href="#aboutme">About.Me</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
    <div id="result" class="container">


    </div>
<script>
		  $('#fb').click( function () {
		  	$('body').append('<div id="fb-root"></div>');
		  	$( "#result" ).load( "ajax/fb.html" );
		  });
</script>
  </body>
</html>