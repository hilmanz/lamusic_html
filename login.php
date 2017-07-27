<!DOCTYPE html>
<html>
<?php include("meta.php"); ?>
<body class="animated" data-animated="fadeIn">
<div id="body">
    <div class="wrapper">
        <section class="page_section" id="login"> 
            <div class="container">
            		<div id="logologin"><img src="images/logo.png"></div>
                    <section class="mainLogin">
                        <form class="loginform" id="login" method="post" enctype="application/x-www-form-urlencoded" action="index.php?page=my-ewallet">
                            <p class="rows">
                                <label for="login"><i class="icon-user"></i>Username</label>
                                <input type="text" id="username" name="username" placeholder="Username">
                            </p>
                            <p class="rows">
                                <label for="password"><i class="icon-lock"></i>Password</label>
                                <input type="password" id="password" name="password" value="" placeholder="Password" class="showpassword">
                            </p>
                            <div class="bot">
                                <a href="index.php?page=forgot" class="forgotbtn"><span class="icon-question">&nbsp;</span>Lupa Password</a>
                                <input name="login" id="login" type="hidden" value="1">
                                <input type="hidden" name="subdomain" value="demo">
                                <input type="submit" name="signin" value="Log in" class="btn green proxima right">
                            </div>
                        </form>
                    </section>
            </div>
        </section>
    </div><!-- end #page -->
</div><!-- end #body -->
<div id="bg-popup"></div>    			
</body>
</html>