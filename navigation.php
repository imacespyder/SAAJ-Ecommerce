<?php
$sql= "SELECT *FROM cateogries WHERE parent = 0";
$pquery= $db->query($sql);
?>
<body onload="username()">
<nav style="background-color:#2874f0">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse"  data-target="#myNavbar" >
        <span class="icon-bar" style="background-color:white" ></span>
        <span class="icon-bar"  style="background-color:white"></span>
        <span class="icon-bar"  style="background-color:white"></span>
      </button>
      <a href="#">
        <h4 style="color:white">Time to Study</h4>
</a>
    </div>
    <div style="color:black;" class="collapse navbar-collapse " id="myNavbar">
      <ul style="color:black;padding-top:0px" class="nav navbar-nav">
        <?php while($parent=mysqli_fetch_assoc($pquery)):?>
          <?php $parent_id=$parent['id'];
          $sql2="select *from cateogries where parent = '$parent_id'";
          $cquery= $db->query($sql2);
          ?>
        <li style="font-size:16px;padding-top:40px;padding-left:50px"class="dropdown">
          <a style="color:black" class="dropdown-toggle" data-toggle="dropdown" href="#"><?php echo $parent['cateogries'];?> <span class="caret"></span></a>
          <ul class="dropdown-menu">
              <?php while($child=mysqli_fetch_assoc($cquery)):?>
            <li><a href="#"><?php echo $child['cateogries'];?></a></li>
            <?php endwhile;?>
          </ul>
        </li>
      <?php endwhile;?>
      <ul style="padding-left:200px;padding-top:44px"class="nav navbar-nav navbar-right">
        <li><a href="cart.html"><font color="black">Cart</font></a></li>
        <li ><a href="Login.html"> <font color="black">Register Now</font></a></li>
        <p4 style="color:white;padding-left:40px;font-size:20px"id="nameofuser"></p4></td>
        
      </ul>
    </div>
  </div>
</nav>
