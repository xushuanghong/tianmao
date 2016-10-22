//兼容的通过类名获取元素的集合
function getClass(selector,obj){  //obj是父容器
	obj=obj||document;
	if(obj.getElementsByClassName){
		var aa=obj.getElementsByClassName(selector)
		// alert(aa)
		return aa;
	}else{
		var arr=obj.getElementsByTagName("*");
		// alert(arr.length)
		var objarr=[]
		for (var i = 0; i < arr.length; i++) {
			// if(arr[i].className==selector){
			if(check(arr[i].className,selector)){
				objarr.push(arr[i])
			}
		};
		return objarr;
	}
}
function check(longstr,str){
	var arr=longstr.split(" ")
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==str){
			return true;
		}
	};
	return false;
}

//兼容性的获取或者设置对象的文字信息
function getText(obj,value){
	if(arguments.length==1){
		if(obj.textContent!=undefined){
			//现代浏览器
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else if(arguments.length==2){
		if(obj.textContent!=undefined){
			obj.textContent=value;
		}else{
			obj.innerText=value;
		}
	}
}

//兼容的获取元素的样式     attr：属性->"width"
function getStyle(obj,attr){
	if(!obj.currentStyle){
		     // 用来获取元素的样式属性 FF
		return getComputedStyle(obj,null)[attr]
	}else{
		    // 用来获取元素的样式属性 IE
		return obj.currentStyle[attr]
	}
}

//动画函数  单参数
function animate1(obj,attr,end,speed,callback){
	var t=setInterval(aa,60)
	function aa(){
		var begin=parseInt(getStyle(obj,attr))
		var newvalue=begin+speed
		if (newvalue>end) {
			clearInterval(t)
			obj.style[attr]=end+"px"
			if (callback) {
				callback()
			} 
		} else{
			obj.style[attr]=newvalue+"px"
		}
		
	}
}
//attrobj->{width:400,height:400}
function animate(obj,attrobj,time,callback){
	var speed={}
	for(i in attrobj){
		//i指的是对象属性名字    attrobj[i]指的是对象属性的值
		speed[i]=60*(attrobj[i]-parseInt(getStyle(obj,i)))/time
	}
	var t=setInterval(aa,60)
	function aa(){
		var begin={}   //宽度的初始值等等

		var newvalue={}
		for(i in attrobj){
			begin[i]=parseInt(getStyle(obj,i))
			newvalue[i]=begin[i]+speed[i];
			if(newvalue[i]>attrobj[i]){
				clearInterval(t)
				obj.style[i]=attrobj[i]+"px"
				if(callback){
					callback()
				}
			}else{
				obj.style[i]=newvalue[i]+"px"
			}
		}
	}
}

//获取元素的函数   通过各种方式获取 ID tagname class name等
function $(seletor,obj){
	if(typeof seletor=="string"){
		obj=obj||document;
		if(seletor.charAt(0)=="."){
			return getClass(seletor.slice(1),obj)
		}else if(seletor.charAt(0)=="#"){
			return obj.getElementById(seletor.slice(1))
		}else{
			return obj.getElementsByTagName(seletor)
		}
	}else if(typeof seletor=="function"){
		window.onload=function(){
			seletor()
		}
	}
}

//获取一个元素的所有子节点
 function getChildren(obj){
	     var arr=obj.childNodes
	     var newarr=[]
	      for(var i=0;i<arr.length;i++){
		       if(arr[i].nodeType==1){
			        newarr.push(arr[i])
			   }
		  }
		  return newarr
	}
//next
function getNext(obj){
	if(obj.getElementsByClassName){
		alert(1)
		return obj.nextElementSibling;
	}else{
		var next=obj.nextSibling;
		if(next==null){
			return null;
		}
		while(next.nodeType!=1){
			next=next.nextSibling
			if(next==null){
				return null;
			}
		}
		return next;
	}
}

////获取前一个
function getPre(obj){
	if(obj.getElementsByClassName){
		return obj.previousElementSilbing;
	}else{
		var previous=obj.previousSibling;
		if(previous==null){
			return null
		}
		while(previous.nodeType!=1){
			previous=previous.previousSibling
			if(previous==null){
				return null
			}
		}
		return previous;
	}
}
//获取第一个
 function getFirst(obj){
      return getChildren(obj)[0]
 }
//获取最后一个
 function getLast(obj){
	  var arr=getChildren(obj)
      return arr[arr.length-1]
 }
//插入到某个对象之后
function insertAfter(newobj,obj){
     var parent=obj.parentNode
	 var next=getNext(obj)
	 if(next==null){
		 parent.appendChild(newobj)
	}else{ 
		 parent.insertBefore(newobj,next)
	}
}


//获取浏览器高度
function getWindow(){
     var width=document.documentElement.clientWidth
	 var height=document.documentElement.clientHeight
		 return{width:width,height:height}
}


//offsetLeft文档坐标    判断父元素有没有定位属性，直到父元素是body
function getPosition(obj){
     var parent=obj.parentNode
     var left=obj.offsetLeft
	 var top=obj.offsetTop
	 while(parent.nodeName!="BODY"){
		 if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
		 left=left+parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"))
		 top=top+parent.offsetLeft+parseInt(getStyle(parent,"borderTopWidth"
		 ))
		 }
	      parent=parent.parentNode
	 }
		  return {x:left,y:top}
}
// 兼容的处理事件绑定(添加事件)
function addevent(obj,event,callback){
	if(obj.addEventListener){
		obj.addEventListener(event,callback,false)
	}else{
		obj.attachEvent("on"+event,callback)
	}
}
// 兼容的处理事件绑定(移除事件)
function removeevent(obj,event,callback){
	if(obj.addEventListener){
		obj.removeEventListener(event,callback,false)
	}else{
		obj.detachEvent("on"+event,callback)
	}
}
// 兼容的处理鼠标滚轮事件
function getWheel(obj,upfun,downfun){
	var obj=obj||document;
	    // 判断现代浏览器
	if (obj.addEventListener){
		// chrome
		obj.addEventListener('mousewheel',fun,false);
		// firefox
		obj.addEventListener('DOMMouseScroll',fun,false);
		     // IE
	}else if(obj.attachEvent){
		obj.attachEvent('onmousewheel',fun)
	}
	function fun (e) {
		var ev=e||window.event;
		if (ev.detail==-3||ev.wheelDelta==120) {
			if(upfun){
				//call  函数调用的时候传递一个参数，这个参数将被作为这个函数中的this使用；并且仅在当前这次调用中有效果。
				upfun.call(obj,ev)
				//upfun.apply(obj.[ev])  apply与call唯一的不同是传递参数时用数组形式传入。
			}
		} else if(ev.detail==3||ev.wheelDelta==-120){
			if (downfun){
				downfun.call(obj,ev)
			} 
		};
	}
}
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
    if(parent.contains){
	    return parent.contains(child) && parent!=child;
    }else{
        return (parent.compareDocumentPosition(child)===20);
    }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
    if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
   }
}
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
	    obj.onmouseover=function  (e) {
	        if(checkHover(e,obj)){
		        overfun.call(obj,[e]);
            }
        }
    }
    if(outfun){
        obj.onmouseout=function  (e) {
	        if(checkHover(e,obj)){
	            outfun.call(obj,[e]);
            }
        }
    }
}
function getEvent (e) {
    return e||window.event;
}