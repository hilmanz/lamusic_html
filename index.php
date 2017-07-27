<!DOCTYPE html>
<html>
<?php include("meta.php"); ?>
<body class="animated" data-animated="fadeIn">
<div id="body">
    <div id="page" class="wrapper">
        <?php include("header.php"); ?> 
		<?php 
        if($_GET['page']=='my-ewallet'){
            include("my-ewallet.php");
        }else if($_GET['page']=='topup'){ 
            include("topup.php");
        }else if($_GET['page']=='topup-sukses'){ 
            include("topup-sukses.php");
        }else if($_GET['page']=='news'){ 
            include("news.php");
        }else if($_GET['page']=='news-detail'){ 
            include("news-detail.php");
        }else if($_GET['page']=='promo'){ 
            include("promo.php");
        }else if($_GET['page']=='feature'){ 
            include("feature.php");
        }else{ 
            include("home.php");
        }?>
		<?php include("footer.php"); ?>
    </div><!-- end #page -->
</div><!-- end #body -->
<div id="bg-popup"></div>    			
</body>
</html>