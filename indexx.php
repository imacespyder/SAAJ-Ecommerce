<?php
require_once  'core/init.php';
include 'includes/head.php';
include 'includes/navigation.php';
include 'includes/slideshow.php';
$sql= "SELECT *FROM product WHERE featured = 1";
$featured=$db->query($sql);
?>

<div class="row">
  <div  class="col-md-3 column_style" style="padding-top: 20px;padding-left:130px;height:320px">
  <a data-toggle="modal" href="#details-modall">
  <img src="image/harry.jpg" alt="HTML tutorial" width="53%" height:30%">
  <p style="padding-left:0.3px;margin:2px"><b>Harry-potter</b></p>
  <p style="padding-left:35px;margin:0px">price:230</p>
  <p style="padding-left:0px;">Arihant-paperback</p>
  </div>
  <div class="modal fade" id="details-modall" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
       <div class="modal-header">
         <button type="button" class="close" onclick="refresh()" data-dismiss="modal" aria-label="Close" >
           <span aria-hidden="true">&times;</span>
         </button>
         <h4 class="modal-title" text-center">harry-potter</h4>
       </div>
       <div class="modal-body">
         <div class"container-fluid">
           <div class="row">
             <div class="col-sm-6">
               <div class="center-block">
                <img src="image/harry.jpg" alt="arihant book" class="details img-responsive">
              </div>
            </div>
            <div class="col-sm-6">
              <h4>Details</h4>
              <p>paperback-arihant</p>
              <p>Price:230</p>
              <p>Brand:arihant</p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
    <button class="btn btn-warning" type="submit" onclick="buynow(1)" >BuyNow</button>
      <button class="btn btn-warning" type="submit"onclick="getdata(1)">Add To cart</button>
    </div>
  </div>
</div>
</div>
<div class="row">
  <div  class="col-md-3 column_style" style="padding-top: 20px;padding-left:130px;height:320px">
  <a data-toggle="modal" href="#details-modalll">
  <img src="image/image11.jpg" alt="HTML tutorial" width="53%" height:30%">
  <p style="padding-left:0.3px;margin:2px"><b>front-of the class</b></p>
  <p style="padding-left:35px;margin:0px">price:250</p>
  <p style="padding-left:0px;">Oxford-paperback</p>
  </div>
  <div class="modal fade" id="details-modalll" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
       <div class="modal-header">
         <button type="button" class="close" onclick="refresh()" data-dismiss="modal" aria-label="Close" >
           <span aria-hidden="true">&times;</span>
         </button>
         <h4 class="modal-title" text-center">front-of the class</h4>
       </div>
       <div class="modal-body">
         <div class"container-fluid">
           <div class="row">
             <div class="col-sm-6">
               <div class="center-block">
                <img src="image/image11.jpg" alt="arihant book" class="details img-responsive">
              </div>
            </div>
            <div class="col-sm-6">
              <h4>Details</h4>
              <p>paperback-oxford</p>
              <p>Price:250</p>
              <p>Brand:oxford</p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
    <button class="btn btn-warning" type="submit" onclick="buynow(2)">BuyNow</button>
      <button class="btn btn-warning" type="submit" onclick="getdata(2)">Add To cart</button>
    </div>
  </div>
</div>
</div>
<div class="row">
  <div  class="col-md-3 column_style" style="padding-top: 20px;padding-left:130px;height:320px">
  <a data-toggle="modal" href="#details-modallll">
  <img src="image/image16.jpg" alt="HTML tutorial" width="53%" height:30%">
  <p style="padding-left:0.3px;margin:2px"><b>Amazone</b></p>
  <p style="padding-left:35px;margin:0px">price:270</p>
  <p style="padding-left:0px;">Arihant-paperback</p>
  </div>
  <div class="modal fade" id="details-modallll" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
       <div class="modal-header">
         <button type="button" class="close" onclick="refresh()" data-dismiss="modal" aria-label="Close" >
           <span aria-hidden="true">&times;</span>
         </button>
         <h4 class="modal-title" text-center">Amazone</h4>
       </div>
       <div class="modal-body">
         <div class"container-fluid">
           <div class="row">
             <div class="col-sm-6">
               <div class="center-block">
                <img src="image/image16.jpg" alt="arihant book" class="details img-responsive">
              </div>
            </div>
            <div class="col-sm-6">
              <h4>Details</h4>
              <p>paperback-arihant</p>
              <p>Price:270</p>
              <p>Brand:arihant</p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
    <button class="btn btn-warning" type="submit" onclick="buynow(3)">BuyNow</button>
      <button class="btn btn-warning" type="submit" onclick="getdata(3)">Add To cart</button>
    </div>
  </div>
</div>
</div>

  
<div class="row">
      <?php while($product=mysqli_fetch_assoc($featured)):?>
  <div  class="col-md-3 column_style" style="padding-top: 20px;padding-left:130px;height:320px">
<a href="javascript:modal(<?= $product['id'];?>)">
  <img src="<?=$product['image'];?>" alt="HTML tutorial" width="53%" height:30%">
  <p style="padding-left:0.3px;margin:2px"><b><?=$product['title'];?></b></p>
  <p style="padding-left:35px;margin:0px">price:<?=$product['price'];?></p>
  <p style="padding-left:0px;"><?=$product['description'];?></p>
  </div>
</a>
<?php endwhile;?>

<script>
function modal(id)
{
  var data ={"id":id};
  jQuery.ajax({
    url:<?= BASEURL;?>+'includes/detailsmodal.php',
    method:"post",
    data:data,
    success: function(data)
    {
      jQuery('body').append(data);
      jQuery('#details-modal').modal('toggle');
}
  });
}
function refresh()
  {
 window.location.reload();
  }

</script>

</div>
</body>
  <?php include 'includes/tail.php';?>
  