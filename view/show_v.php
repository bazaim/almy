<html>
   <head>
   	<title>ALMY</title>
   	<meta name="description" content="Almy, the new image galery" />
   	<meta name="keyword" lang="fr" content="HTML5, CSS3, test" />
   	<meta charset="UTF-8" />
   	<meta name="language" content="fr" />
   	<meta name="robots" content="index, follow, all" />
   	<meta name="googlebot" content="index, follow, all" />
   	<meta name="msvalidate.01" content="" />
   	<meta name="google-site-verication" content="" />
   	<meta name="author" content="Bazaim" />
   	
   	<link rel="shortcut icon" href="img/favicon.ico" />
   	<link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
   	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" media="screen" />
   	
    <link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
   	<link rel="stylesheet" type="text/css" href="css/almy.css" media="screen" />
   	
   	<script type="text/javascript" src="script/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="script/connexion.js"></script>
   	<script type="text/javascript" src="script/almy.js"></script>

    <script>
    $(document).ready(function() {

        $('#divAlmy').almy({
            width        : '100%',
            widthImage   : '150px'
        });

    });
    </script>

      <!--[if IE]>
         <script src="script/html5.js"></script>
      <![endif]-->   
   </head>
   <body>
      <nav style="z-index: 0;" class="navbar navbar-default navbar-static-top navbar-inverse" role="navigation">
        <div class="navbar-header">
		    <a class="navbar-brand" href="#">Almy</a>
        <?php if(isset($error)) echo '<p id="errorPhp" class="navbar-text colorRedText">'.$error.'</p>'; ?>
		</div>
         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	    	<ul class="nav navbar-nav navbar-right">
		      <li><a href="#" id="connexion">Connexion</a></li>
		    </ul>
	    </div>
      </nav>
      <div class="container">
      <div id="divAlmy" class="containerAlmy">
        <?php
            foreach($images as $image) {
                echo "<a almy-cat=\"".implode(";", $image['cat'])."\" href=\"".$image['url']."\"><img src=\"".$image['url_min']."\"></a>";
            }
        ?>

        <!-- Ce qui va apparaitre au clique sur une image -->
        <div class="background">
            <div id="categoriesTop"></div>
            <div id="categoriesMiddle">
              <div class="imgContainer">
              <?php
                  foreach($images as $image) {
                      echo "<img src=\"".$image['url_min']."\">";
                  }
              ?>
              <div class="navDirection">
                <ul>
                    <li><a class="navPrev"></a></li>
                    <li><a class="navPlay"></a></li>
                    <li><a class="navNext"></a></li>
                </ul>
              </div>
            </div>
            <div id="mosaiqueBottom"></div>
            </div>
        </div>
        <!-- End clic image -->

      </div>
      </div>
      <div id="load"></div>
      <div id="backgroundConnex">
       <div id="formConnex">
         <form method="post" action="?do=login" class="form-signin" id="formSignin">
           <h2 class="form-signin-heading">Connexion</h2>
           <p id="error" class="colorRedText"></p>
           <input type="text" name="login" id="login" class="form-control" placeholder="Login">
           <input type="password" name="password" id="password" class="form-control inputMargeTop" placeholder="Mot de Passe" >
           <button class="btn btn-lg btn-primary btn-block inputMargeTop" type="submit">Valider</button>
         </form>
       </div>      	
      </div>
   </body>
</html>
