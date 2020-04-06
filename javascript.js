//Random Background
function randombg(){
    totalCount=4;
    var num = Math.ceil( Math.random() * totalCount );
    document.body.background = num+'.jpg';
    document.body.style.backgroundSize = "cover";
    }
    
    //To Validate Email and load Password Page
    function dothis(){
        var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(document.getElementById("emailhere").value==""){
        document.getElementById("errormsg").innerHTML="Enter a valid Email address";
        document.getElementById("popup_container").style.visibility="visible";
        }
        else{
            if(document.getElementById("emailhere").value.match(mailformat)){
          localStorage.setItem("email",document.getElementById("emailhere").value);
         window.open("loading.html","_self");
         localStorage.setItem("time","1500");
         localStorage.setItem("link","E-kart_pass.html");
     }
     else {
        document.getElementById("errormsg").innerHTML="Enter a valid Email address";
        document.getElementById("popup_container").style.visibility="visible";
        document.getElementById("emailhere").value.focus();
     }
    }}
    
    // To load Login Page
    function loadfront() {
        if(document.getElementById("pf").value==""){
            document.getElementById("errormsg").innerHTML="Pasword cannot be empty";
        document.getElementById("popup_container").style.visibility="visible";
        }
        else{
        localStorage.setItem("pass",document.getElementById("pf").value);
      window.open('loading.html',"_self");
      localStorage.setItem("time","2000");
      localStorage.setItem("link","Login.html");
    }}
    
    //To go back
    function goback(a){
        if(a=='1'){
      window.open('E-kart.html',"_self");
    }
    else if(a==2){
         window.open('Login.html',"_self");
    }}
    
    //To Reset Password
    var check=0;
    function pass_reset(){
        if(check==0){
        if(document.getElementById("pass").value==""){
        document.getElementById("errormsg").innerHTML="Pasword cannot be empty";
        document.getElementById("popup_container").style.visibility="visible";
        }
        else{
        localStorage.setItem("pass",document.getElementById("pass_field").value);
        document.getElementById('top').innerHTML="PASSWORD RESETED SUCCESSFULLY";
        document.getElementById('pass').style.visibility="hidden";
        check++;
        }}
        else{
        check=0;
        localStorage.setItem("time","2000");
        localStorage.setItem("link","Login.html");
        window.open('loading.html',"_self");
        }
    }
    
    //Load forget password page
    function forget_password(){
       localStorage.setItem("time","1000");
        localStorage.setItem("link","password_reset.html");
        window.open('loading.html',"_self");
    }
    
    //Check details in login page 
    function loginchecker(){
        if(document.getElementById("loginmail").value=="" || document.getElementById("loginpass").value==""){
            document.getElementById("errormsg").innerHTML="Each field is required";
        document.getElementById("popup_container").style.visibility="visible";
        }
        else{
        var get_mail=localStorage.getItem("email");
        var get_pass=localStorage.getItem("pass");
        var login_mail=document.getElementById("loginmail").value;
        var login_pass=document.getElementById("loginpass").value;
        if(get_mail!=login_mail || get_pass!=login_pass){
        document.getElementById("errormsg").innerHTML="Username Or Paasword is Incorrect";
        document.getElementById("popup_container").style.visibility="visible";
        }
        else{
            window.open("indexx.php","_self");
        }
    }}
    
    
    //Loading Animation
    var myVar;
    function loader() {
        myVar = setTimeout(function(){ window.open(localStorage.getItem("link"),"_self");
    myStopFunction();
         }, localStorage.getItem("time"));
    }
    function myStopFunction() {
        clearTimeout(myVar);
    }
    
    //PopUp Error
    function closepopup(){
    document.getElementById("popup_container").style.visibility="hidden";
    }
    
    //Loading different videos at refresh
    function videoloader(){
    totalCount=4;
    var num = Math.ceil( Math.random() * totalCount );
    var player = document.getElementById('vdo');
    var source=document.getElementById("source");
    player.pause();
    source.src="ad"+num+".mp4";
    player.load();
    player.play();
    }
    
    
    //Real time Calculation
    function startCalc(){
     interval = setInterval("total()",1);
    }
    function total(){
    var price=localStorage.getItem("price");
    var quantity=document.getElementById("qty_field").value;
    var totalprice=price*quantity;
    document.getElementById("totalp").innerHTML=totalprice;
    }
    function stopCalc(){
    clearInterval(interval);
    }
    
    //load Delivery Page
    function delivery(){
    window.open("DeliveryPage.html","_self");
    }
    
    //gives default value to the quantity
    function givevalue(){
    document.getElementById("qty_field").value="1";
    document.getElementById("pname").innerText=localStorage.getItem("name");
    document.getElementById("pprice").innerText=localStorage.getItem("price");
    document.getElementById("totalp").innerText=localStorage.getItem("price");
    }
    
    //specspage
    function getdata(a) {
        var getpro=localStorage.getItem("name");
        if(getpro==""){
        if(a=='1'){
        localStorage.setItem("What",a);	
        localStorage.setItem("Product"+a,"Name : Harry-Potter");	
        localStorage.setItem("Price"+a,"Price : 230");
        localStorage.setItem("Photo"+a,"image/harry.jpg");
        localStorage.setItem("name","Harry-Potter");
        total++;
    }
    else if(a=='2'){
        localStorage.setItem("What",a);	
        localStorage.setItem("Product"+a,"Name : front-Of the class");	
        localStorage.setItem("Price"+a,"Price : 250");
        localStorage.setItem("Photo"+a,"image/image11.jpg");
        localStorage.setItem("name","Front of the class");
    }
    else if(a=='3'){
        localStorage.setItem("What",a);	
        localStorage.setItem("Product"+a,"Name : Amazone ");	
        localStorage.setItem("Price"+a,"Price : 270");
        localStorage.setItem("Photo"+a,"image/image16.jpg");
        localStorage.setItem("name","Amazone");
    }
    alert("Item Added To Cart Successfully");
    }
    else{
    alert("Cart is full");
    var cnf=confirm("Want to replace the item in the cart with new item");
    if(cnf==1){
        localStorage.setItem("name","");
        getdata(a);
    }
    else{
        alert("Cancelled");
    }
    }}
    
    
    //cart buy
    function cartbuy(){
    localStorage.setItem("price",localStorage.getItem("cartprice"));
    localStorage.setItem("name",document.getElementById('product1').innerText);
    window.open("buynow.html","_self");
    }
    
    //buynow()
    function buynow(a){
    
        if(a=='1'){
        localStorage.setItem("name","Harry-potter");
        localStorage.setItem("price","230");
    }
    else if(a=='2'){
        localStorage.setItem("name","first of the class");
        localStorage.setItem("price","250");
    }
    else if(a=='3'){
        localStorage.setItem("name","Amazone");
        localStorage.setItem("price","270");
    }
        window.open("buynow.html","_self");
    }
    
    
    function opener(a){
        if(a=='1'){
        window.open('iphonespecs.html',"_self");		
        }
        else if(a=='2'){
            window.open('AboutUs.html',"_self");		
        }
        else if(a=='3'){
            window.open('Cart.html',"_self");
        }
    }
    
    function username(){
    document.getElementById('nameofuser').innerHTML=localStorage.getItem("email");
    }
    
    function loaditems(){
    document.getElementById('nameofuser').innerHTML=localStorage.getItem("email");
    var a=localStorage.getItem("What");
            document.getElementById('img1').innerHTML="<img  src="+localStorage.getItem("Photo"+a)+" width=\x22 80px \x22>";
            document.getElementById('product1').innerText=localStorage.getItem("Product"+a);
            document.getElementById('price1').innerText=localStorage.getItem("Price"+a);
            document.getElementById('tp').innerText=localStorage.getItem("Price"+a);
            if(a=='1'){
                localStorage.setItem("cartprice","53899");
            }
            else if(a=='2'){
                localStorage.setItem("cartprice","13999");
            }
            if(a=='3'){
                localStorage.setItem("cartprice","97999");
            }
    }
    
    function err(){
    if(document.getElementById('searchbox').value==""){
        alert("Enter Something");
    }
    else if(document.getElementById('searchbox').value=="IphoneX"){
    window.open("iphonespecs.html","_self");
    }
    else if(document.getElementById('searchbox').value==" MiA1"){
    window.open("mispecs.html","_self");
    }
    else if(document.getElementById('searchbox').value=="Macbook"){
    window.open("macspecs.html","_self");
    }
    else{
        alert("This Site is Under Development");
    }
    }
    
    function loadlogin(){
    window.open("E-kart.html","_self");
    }