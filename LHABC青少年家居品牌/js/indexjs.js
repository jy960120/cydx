/*tab切换*/
$(function(){
$(".tabmeau").hover(function(){
var index=$(".tabmeau").index($(this));
$(".tabmeau:eq(0)").children().children("img").attr("src","images/index/ulli/ting1.jpg")
$(".tabmeau:eq(1)").children().children("img").attr("src","images/index/ulli/ting2.jpg")
$(".tabmeau:eq(2)").children().children("img").attr("src","images/index/ulli/ting3.jpg")
$(".tabmeau:eq(3)").children().children("img").attr("src","images/index/ulli/ting4.jpg")
$(this).children().children("img").attr("src","images/index/ulli/ting0"+(index+1)+".jpg")
$(".taba").css("color","#bbaea8");
$(".taba:eq("+index+")").css("color","#66b67b");
/*$(".tabceng:eq("+index+")").removeClass("tabceng1").addClass("tabceng2");*/
$(".tabceng").css("display","none");
$(".tabceng:eq("+index+")").css("display","block");

},function(){})
})

/*tab2切换*/
$(function(){

	$(".peoplegnb").hover(function(){
		var num=$(".peoplegnb").index($(this));
		$(".peoplegnb").parent().css("backgroundColor","#ffffff");
		$(".peoplegnb").css("color","#66b67b");
		$(this).parent().css("backgroundColor","#66b67b");
		$(this).css("color","#ffffff");
		$(".peopleceng").css("display","none");
        $(".peopleceng:eq("+num+")").css("display","block");
        
	},function(){})
})

/*层图片载入*/
$(function(){
	$(".apa").hover(function(){
		var count=$(".apa").index($(this));
		if (count<4) {
		$(".apceng").children("img").attr("src","images/index/apceng/ceng"+(count+1)+".jpg");
	}})
})
$(function(){
	$(".apa2").hover(function(){
		var count=$(".apa2").index($(this));
		if (count<4) {
		$(".apceng2").children("img").attr("src","images/index/apceng/ceng2"+count+".jpg");
	}})
})


/*function show(s){
	var apDiv=document.getElementById("apDiv"+s);
	apDiv.style.display="block";
	apDiv.mouseover(ss);
};*/
function hide(s){
	var apDiv=document.getElementById("apDiv"+s);
	apDiv.style.display="none";
}



/*子菜单*/
$(function(){
	$("#meau li a.meaua").hover(function(){
		var n=$("#meau li a.meaua").index($(this));
		$("#meau li a.meaua").css("color","#736353");
		$(this).css("color","#66b67b");
		$(".apdiv").css("display","none");
        $(".apdiv:eq("+n+")").slideDown(300);
       
	},function(){
		$("#meau li a.meaua").css("color","#736353");
		/*var n=$("#meau li a.meaua").index($(this));
		$(".apdiv:eq("+n+")").slideUp(400);*/
	})


        $(".apdiv").hover(function(){
        $(this).css("display","block");
        },function(){
        $(this).css("display","none");
        })
})
/*微信层*/
function weixin1(){
 	var weixinceng=document.getElementById('weixinceng');
 	weixinceng.style.display="block";
 }
 function weixin2(){
 	var weixinceng=document.getElementById('weixinceng');
 	weixinceng.style.display="none";
 }

 /*放大图片*/
 

	$(function(){
	var x = -250;
	var y = -340;
	$(".more").mouseover(function(e){	
		$(this).attr("src","images/index/ulli/more1.jpg");
	    var fdnumber=$(".more").index($(this));   
		var tooltip="<div id='tooltip'><img src='images/shangpin/2017010"+(fdnumber+1)+".jpg'/></div>";
		$("body").append(tooltip);
		$("#tooltip").css({"top": (e.pageY+y) + "px",
				          "left": (e.pageX+x) + "px"})
		             .show("fast");	
	}).mouseout(function(){
		$(this).attr("src","images/index/ulli/more.jpg");
		$("#tooltip").remove();
	}).mousemove(function(event){
		$("#tooltip").css({"top": (event.pageY+y) + "px",
				          "left": (event.pageX+x) + "px"})
	})
	})


$(function(){
	var x = -250;
	var y = -340;
	$(".morea").mouseover(function(e){	
		$(this).attr("src","images/index/ulli/more1.jpg");
	    var fdnumber=$(".morea").index($(this));   
		var tooltip="<div id='tooltip'><img src='images/shangpin/201701"+(fdnumber+10)+".jpg'/></div>";
		$("body").append(tooltip);
		$("#tooltip").css({"top": (e.pageY+y) + "px",
				          "left": (e.pageX+x) + "px"})
		             .show("fast");	
	}).mouseout(function(){
		$(this).attr("src","images/index/ulli/more.jpg");
		$("#tooltip").remove();
	}).mousemove(function(event){
		$("#tooltip").css({"top": (event.pageY+y) + "px",
				          "left": (event.pageX+x) + "px"})
	})
	})

$(function(){
	var x = -250;
	var y = -340;
	$(".moreaa").mouseover(function(e){	
		$(this).attr("src","images/index/ulli/more1.jpg");
	    var fdnumber=$(".moreaa").index($(this));   
		var tooltip="<div id='tooltip'><img src='images/shangpin/201701"+(fdnumber+19)+".jpg'/></div>";
		$("body").append(tooltip);
		$("#tooltip").css({"top": (e.pageY+y) + "px",
				          "left": (e.pageX+x) + "px"})
		             .show("fast");	
	}).mouseout(function(){
		$(this).attr("src","images/index/ulli/more.jpg");
		$("#tooltip").remove();
	}).mousemove(function(event){
		$("#tooltip").css({"top": (event.pageY+y) + "px",
				          "left": (event.pageX+x) + "px"})
	})
	})

$(function(){
	var x = -250;
	var y = -340;
	$(".fd").mouseover(function(e){	
		var src=$(this).attr("src");  
		var tooltip="<div id='tooltip'><img src='"+src+"'/></div>";
		$("body").append(tooltip);
		$("#tooltip").css({"top": (e.pageY+y) + "px",
				          "left": (e.pageX+x) + "px"})
		             .show("fast");	
	}).mouseout(function(){
		$("#tooltip").remove();
	}).mousemove(function(event){
		$("#tooltip").css({"top": (event.pageY+y) + "px",
				          "left": (event.pageX+x) + "px"})
	})
	})


/*下拉显示层*/
$(function(){
$("#xiala").click(function(){
	
	$(this).css("display","none");
	$("#xialaceng").slideDown(1000);
})
})
/*故事层tab切换*/
$(function(){
	$(".stroya").hover(function(){
		$(this).parent().siblings().children().css("background-color","#ffffff")
		       .css("color","#c0aea8");
		$(this).css("background-color","#66b67b")
		       .css("color","#ffffff");
	},function(){})
})
function showstory(n){
	var storyceng1=document.getElementById('storyceng1');
	var storyceng2=document.getElementById('storyceng2');
	var storyceng3=document.getElementById('storyceng3');
	if(n==1){
		storyceng1.style.display="block";
		storyceng2.style.display="none";
		storyceng3.style.display="none";
	}
	else if(n==2){
		storyceng1.style.display="none";
		storyceng2.style.display="block";
		storyceng3.style.display="none";
	}
	else{
		storyceng1.style.display="none";
		storyceng2.style.display="none";
		storyceng3.style.display="block";
	}
}


/*$(function(){
	$(".banner").click(function(){
		window.location.href="about1.html";

	})
})*/