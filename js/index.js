window.onload=function(){
//hot pinpai heart
 var hotpp=getClass("hotpp")
 var heart=getClass("heart")
 for (var i = 0; i < hotpp.length; i++) {
  hotpp[i].index=i
  hotpp[i].onmouseover=function(){
       heart[this.index].style.display="block";
  }
  hotpp[i].onmouseout=function(){
       heart[this.index].style.display="none";
  }
 };
//hot pinpai heart end
//ppinpai
var htrwz=getClass("htrwz")
var hotrp=getClass("hot-right-pinpai")
for (var i = 0; i < htrwz.length; i++) {
	htrwz[i].index=i;
	htrwz[i].onclick=function(){
		for (var j = 0; j < hotrp.length; j++) {
			hotrp[j].style.display="none"
			htrwz[j].style.borderBottom="0"
		    htrwz[j].style.color="#555"
		    htrwz[j].style.fontWeight="normal"
		};
		hotrp[this.index].style.display="block"
		this.style.borderBottom="2px solid #000"
		this.style.color="#000"
		this.style.fontWeight="bold"
	}
};
//pinpai end
//banner
var bn=getClass("bn")
var dd=getClass("dd")
var bg=getClass("bannerbg")[0]
var color=["#e5e5e5","#e5e5e5","#ca2222","#e5e5e5","#f22955","#e5e5e5"]
var timeout;
for (var i = 0; i < dd.length; i++) { 
	dd[i].index=i
	dd[i].onmouseover=function(){
        
        that=this;
		timeout=setTimeout(function(){
		clearInterval(t)
      	for (var j = 0; j < bn.length; j++) {
      		bn[j].style.display="none"
      		dd[j].style.background="rgba(0,0,0,0.4)"
      		bn[j].style.opacity="0.6"
      };
      bn[that.index].style.display="block"
      that.style.background="rgba(225,225,225,0.9)"
      bg.style.background=color[that.index]
      animate(bn[that.index],{opacity:1},200,Tween.Linear)
     },300);
   }
   dd[i].onmouseout=function(){
   	num=this.index
   	 clearTimeout(timeout)
   }
  
};
var num=0;
function lunBo(){
	num++;
	if (num==bn.length) {
		num=0;
	};
    for (var i = 0; i < bn.length; i++) {
      		bn[i].style.display="none"
      		dd[i].style.background="rgba(0,0,0,0.4)"
      };
      bn[num].style.display="block"
      dd[num].style.background="rgba(225,225,225,0.9)"
      bg.style.background=color[num]
      animate(bn[num],{opacity:1},200)
}
var t=setInterval(lunBo,3000)
var bingbox=getClass("bingbox")[0]
bingbox.onmouseover=function(){
	clearInterval(t)
}
bingbox.onmouseout=function(){
	t=setInterval(lunBo,3000)
}
//banner end
//top
var mytb=getClass("mytb")
var tb=getClass("tb")
for (var i = 0; i < tb.length; i++) {
	tb[i].index=i
	mytb[i].index2=i
 tb[i].onmouseover=function(){
 	
	mytb[this.index].style.display="block"
	this.style.background="#fff"
	this.style.color="#da1726"
}
mytb[i].onmouseover=function(){
	this.style.display="block"

	tb[this.index2].style.background="#fff"
	tb[this.index2].style.color="#da1726"	
}
tb[i].onmouseout=function(){
	mytb[this.index].style.display="none"
	this.style.background="url(img/sj.png) no-repeat"
	this.style.borderLeft="0"
	this.style.color="#fff"

}
mytb[i].onmouseout=function(){
	this.style.display="none"
	tb[this.index2].style.background="url(img/sj.png) no-repeat"
	tb[this.index2].style.borderLeft="0"
	tb[this.index2].style.color="#fff"

}
};
//top end
//inpu
var input=document.getElementsByName('search')[0]
input.onfocus=function(){
if (input.value=="功夫熊猫卖萌贺岁") {	
       	input.value=""
       }
}
input.onblur=function(){
  if (input.value=="") {
  	input.value="功夫熊猫卖萌贺岁"
  };
}
var chusoso=$(".chusoso")[0]
chusoso.onfocus=function(){
if (chusoso.value=="春节启程 把爱装回家") {	
       	chusoso.value=""
       }
}
chusoso.onblur=function(){
  if (chusoso.value=="") {
  	chusoso.value="春节启程 把爱装回家"
  };
}
//input end
//right
var Rt=$("div",$(".Rightbox")[0])
var feiru=$(".feiru")
var to;
Rt[9].onclick=function(){

	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	animate(obj,{scrollTop:0},1000)
    
};
for (var i = 0; i < Rt.length; i++) {
	Rt[i].index=i
	if (i!=1) {
	Rt[i].onmouseover=function(){
		this.style.background="#c40000"
		clearTimeout(to)	
		var aa=this
		to=setTimeout(function(){
		feiru[aa.index].style.display="block"
		animate(feiru[aa.index],{marginLeft:53,opacity:1},300)
       },200)

	}
	Rt[i].onmouseout=function(e){
		
		clearTimeout(to)
		var that=this
		this.style.background="#000"
	    animate(feiru[this.index],{marginLeft:0,opacity:0},200,function(){
	    	feiru[that.index].style.display="none"
	    })
	  
	}
	/*feiru[i].onmouseout=function(){
        this.style.display="block"
        this.style.marginLeft=53
        this.style.opacity=1
	}*/
  }else{
  	var li=$("li",Rt[i])[0]
     Rt[i].onmouseover=function(){
     	li.style.background="url(img/r11.png) no-repeat";
		this.style.background="#c40000"
	}
	Rt[i].onmouseout=function(){
		li.style.background="url(img/r2.png) no-repeat";
		this.style.background="#000"
	}
   }
};
//right end
var chuxian=$(".chuxianbg")[0]
var fg1=true,fg2=true;
var imgs=$("img")
var obj=document.documentElement.scrollTop?document.documentElement:document.body;
for (var ni = 0; ni < imgs.length; ni++) {
   	if (obj.scrollTop<offsetWindow().height) {
   		imgs[ni].src=imgs[ni].getAttribute("data-src")
   	};
   	
   };
window.onscroll=function(){
	obj=document.documentElement.scrollTop?document.documentElement:document.body;
	if (obj.scrollTop>907) {
		fg2=true
		if(fg1){
          fg1=false
		animate(chuxian,{top:0},1000)
		}
	
   };
   if (obj.scrollTop<907) {
   	fg1=true
   	if (fg2) {
   		fg2=false
   	animate(chuxian,{top:-50},1000)
   	};
   };
   for (var i = 0; i < imgs.length; i++) {
   	if (obj.scrollTop>imgs[i].offsetTop-offsetWindow().height) {
   		imgs[i].src=imgs[i].getAttribute("data-src")
   	 };
   	
   };
}
//ceDaonext
var cedao=$(".cedao-n");
var ceDaonext=$(".ceDaonext")
for (var i = 0; i < cedao.length; i++) {
	cedao[i].index=i
	cedao[i].onmouseover=function(){
		this.style.background="#e5e5e5 url(img/02.png)";
		ceDaonext[this.index].style.display="block"
		animate(ceDaonext[this.index],{marginLeft:190})
	}
	ceDaonext[i].onmouseover=function(){
		this.style.marginLeft="190px"
		this.style.display="block"
	}
	ceDaonext[i].onmouseout=function(){
		this.style.marginLeft="180px"
		this.style.display="none"
	}

	cedao[i].onmouseout=function(){
		ceDaonext[this.index].style.marginLeft="180px";
		this.style.background="";
		ceDaonext[this.index].style.display="none"
	}
};
//ceDaonext end
}