window.onload=function(){
	var topBtn=$(".nav-cd");
	var top=$(".nav li");
	topBtn.click(function(){
		top.slideToggle();
	})
	var user=$(".nav-cd1");
	//console.log(user)
	var center=$(".center");
	var login=$(".login");
	user.click(function(){
		center.css({width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"});
		login.css({position:"static",width:"50%",margin:"0 auto"})
	})
}