//获取li对象集合
var items=document.getElementsByClassName("items");


window.onload=function () {
	//执行轮播
	lunbo("ul_lunbo",2,16,"top");
	//显现 隐藏效果
    showAndHidden(items);
}



function showAndHidden(items) {
	//对items遍历，给每个ul(.inner)对象添加鼠标移入、移出事件
	for(var i=0;i<items.length;i++){
		var child=items[i].getElementsByClassName("inner")[0];
		//闭包！！！
			items[i].onmouseenter=function (chi) {
			 return function () {
			chi.style.display="block";				
			}
		}(child)
		    
			items[i].onmouseleave=function (chi) {
		    return function () {
		    	chi.style.display="none";
		    }			
		}(child)
    }
}



// 轮播函数
function lunbo (element,number,time,direction) {
	//获取元素宽度
		var ele=document.getElementById(element);
		var eleWidth=ele.offsetWidth;
		var eleHeight=ele.offsetHeight;
    //每次移动距离 -- 千分之一
		var disWidth=eleWidth*(0.001);
		var disHeight=eleHeight*(0.001);
		var left=0,top=0,right=0,bottom=0;
	//总共移动百分比
		var percent=1-1/number;
		//设置计时器  time/percent 计算得到的延迟时间
	switch (direction) {
		case "top":
			 setInterval(topChangePosition,time/percent);
			break;
		case "right":
			 setInterval(rightChangePosition,time/percent);
			break;
		case "bottom":
			 setInterval(bottomChangePosition,time/percent);
			break;
		case "left":
			 setInterval(leftChangePosition,time/percent);
			break;
		default:
			
			break;
	}
     //向左
      function leftChangePosition () {
		ele.style.left=-left+"px";
		console.log(ele.style.right);
		left+=disWidth;
		if((left)>eleWidth*percent)
		   left=0; 
      }
       //向上
      function topChangePosition () {
		ele.style.top=-top+"px";
		top+=disHeight;
		if(top>eleHeight*percent)
		   top=0; 
      }
      //向右
      function rightChangePosition () {
		ele.style.right=-right+"px";
		right+=disWidth;
		if(right>eleWidth*percent)
		   right=0; 
      }
      //向下
      function bottomChangePosition () {
		ele.style.bottom=-bottom+"px";
		bottom+=disHeight;
		if(bottom>eleHeight*percent)
		   bottom=0; 
      }                  
}




