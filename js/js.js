// JavaScript Document
/*function tab(id,sEvent){
	var oTabBox=document.getElementById(id);
	var aTabBtn=oTabBox.children[0].children[0].children;
	var aTabCon=oTabBox.children[1].children;
	
	for(var i=0; i<aTabBtn.length; i++){
		aTabBtn[i].index=i;
		aTabBtn[i][sEvent]=function(){
			for(var i=0; i<aTabBtn.length; i++){
				aTabBtn[i].className='';
				aTabCon[i].style.display='none';
			}
			this.index==0?this.className='noBl active':this.className='active';
			
			aTabCon[this.index].style.display='block';	
		}
	}
}*/
/*;(function(){
	var oUl=document.getElementById('leftNav_box');
	var aLi=oUl.children;
	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
			var oA=this.getElementsByTagName('a')[0];
			var oDiv=this.getElementsByTagName('div')[0];
			oA && (oA.style.background='');
			oDiv && (oDiv.style.display='block');
		};
		aLi[i].onmouseout=function(){
			var oA=this.getElementsByTagName('a')[0];
			var oDiv=this.getElementsByTagName('div')[0];
			oA && (oA.style.background='');
			oDiv && (oDiv.style.display='none');
		};
	}
})();
*/
/*;(function(){
	var oUl=document.getElementById('live_box');
	var aLi=oUl.children;
	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover=function(){
			var oA=this.getElementsByTagName('a')[0];
			var oDiv=this.getElementsByTagName('div')[0];
			oA && (oA.style.background='');
			oDiv && (oDiv.style.display='block');
		};
		aLi[i].onmouseout=function(){
			var oA=this.getElementsByTagName('a')[0];
			var oDiv=this.getElementsByTagName('div')[0];
			oA && (oA.style.background='');
			oDiv && (oDiv.style.display='none');
		};
	}
})();*/


/*;(function(){
	var oBox=document.getElementById('box');
	var aLi=oBox.getElementsByTagName('li');
	var oCon=document.getElementsByClassName('zh_meau');
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className='';
				oCon[i].style.display='none';
			}
			this.className='on';
			oCon[this.index].style.display='block';
		};
	}

})();*/