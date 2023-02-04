
(function(){
var lun = {

   "changeInterest":function(){
          var changebtn = document.getElementsByClassName('interest-r')[0];
          var changebackground =document.getElementsByClassName('mask')[0];
          var changeit=document.getElementsByClassName('alertNode')[0];
          var close =document.getElementsByClassName('alertNode-img')[0];
          var changetop=document.getElementsByClassName('alertNode-topalert')[0];
          var changecenter =document.getElementsByClassName('alertNode-centeralert')[0];
          var changecenterchild=changecenter.children;
          var centeralli=document.getElementsByClassName('alertNode-centeralert')[0].getElementsByTagName('li');
          var changetopchild=changetop.children;
          var changecolor=document.getElementsByClassName('alertNode-centeralert')[0].getElementsByTagName('li');
          var sure =document.getElementsByClassName('last-sure')[0];
          var last=document.getElementsByClassName('alertNode-bottomalert')[0];
          var lastul=last.getElementsByTagName('li');
         var allNumber=document.getElementById('numbercount');
          changeit.style.opacity='0';
            changebackground.style.opacity='0';
            changebackground.style.transition='.5s';
            changeit.style.transition='.5s';
              console.log('made by 秋刀鱼_(:з」∠)_别急');

          last.onclick=function(){
           
               if(event.target.nodeName == 'IMG')
               {

                  for(var i=0;i<centeralli.length;i++)
                  {
                     if(centeralli[i].innerText == event.target.parentNode.title)
                     {
                        centeralli[i].className='';
                        break;
                     }
                  }
                  last.removeChild(event.target.parentNode);
                  allNumber.innerText = lastul.length;
                     changeit.style.marginTop=-changeit.offsetHeight/2+'px';

               }        

          };

           for(var i=0;i<changetopchild.length;i++)
           {
               changetopchild[i].index=i;
               changetopchild[i].onclick=function()
               {
                     
                  for(var i=0;i<changetopchild.length;i++)
                  {
                     changetopchild[i].className='';
                     changecenterchild[i].className='';
                  }
                      changetopchild[changetopchild.length-1].className ='no'
                      this.className+=' active';
                      changecenterchild[this.index].className='bk';

               };
              

           };
            for(var i=0;i<changecolor.length;i++)
               {
                         changecolor[i].onclick=function()
                         {
                           console.log('made by 秋刀鱼_(:з」∠)_别急');
                            if(this.className =='active')
                            {
                                this.className='';
                                for(var i=0;i<lastul.length;i++)
                                {
                                 if(this.innerText==lastul[i].title)
                                 {
                                    last.removeChild(lastul[i]);
                                    break;
                                 }
                                };
                            }
                            else
                            {
                              this.className ='active'
                              var LI=document.createElement('li');
                              LI.title= this.innerText;
                              LI.innerHTML =this.innerText+'<img src="closed.png">';
                              last.appendChild(LI);
                             
                           };
                            allNumber.innerText = lastul.length;
                            changeit.style.marginTop=-changeit.offsetHeight/2+'px';

                         };
                         changecolor[i].onmousedown=function(){
                               return false;
                         };
               };

           changebtn.onclick=function(){

           changebackground.style.display='block';
            changeit.style.display='block';
            setTimeout(function(){
                changeit.style.opacity='1';
                changebackground.style.opacity='1';
            },0);
            setTimeout(function(){
             changebackground.style.transition='0s';
            changeit.style.transition='0s';
            },500);

           };

          sure.onclick=close.onclick=function(){
            changebackground.style.transition='0.5s';
            changeit.style.transition='0.5s';
            setTimeout(function(){
                changeit.style.opacity='0';
                changebackground.style.opacity='0';
            },0);
            setTimeout(function(){
             changebackground.style.display='none';
            changeit.style.display='none';
            },500);
            
           };
           
   },
   //////////////////////////秒杀模块切换效果//////////////////////////////
   "qhslider":function(){
         var ulul =document.getElementsByClassName('seckill-tab-top')[0];
         var ululli =ulul.children;
         var buy =document.getElementsByClassName('seckill-tab-content')[0];
         var buycs=buy.children;

         for(var i=0;i<ululli.length;i++)
         {
                 ululli[i].index=i;
                 ululli[i].onmouseover=function(){
                        for(var i=0;i<ululli.length;i++)
                        {
                          ululli[i].className=''; 
                          buycs[i].style.display='none';
                        }
                        ululli[0].className='first'
                        ululli[ululli.length-1]='no-right';
                        this.className+=' active';
                        buycs[this.index].style.display='block';
                 };
         };
   },

   /////////////////////吸顶条制作//////////////////////////////////////////////////////////////////////////////////////////////
        "xdt":function(){
         var topNodeq=document.getElementsByClassName('NodeTop')[0];
         var topNodecopyq=document.getElementsByClassName('nodetopcopy')[0];
         var windowshow = document.getElementsByClassName('window-show')[0];
         var windowbottm111 = document.getElementsByClassName('bottom')[1];
         var timer = null;
                window.onscroll=function(){

                     if(document.documentElement.scrollTop>0)
                     {
                             
                           windowshow.style.display='block';
                     }
                     else
                     {
                         windowshow.style.display='none';
                     }
                        if(document.documentElement.scrollTop>=550)
                        {          

                                topNodeq.style.position = 'fixed';
                                topNodecopyq.style.display = 'block';
                        }
                        else{
                           topNodeq.style.position = 'relative';
                                topNodecopyq.style.display = 'none';
                        }
                };

                  windowbottm111.onclick=function(){
                    clearInterval(timer);
                  timer =setInterval(function(){
                           if(document.documentElement.scrollTop<=0)
                           {
                                clearInterval(timer);
                                return;
                           }
                           else{
                              document.documentElement.scrollTop=document.documentElement.scrollTop - 100 < 0? 0 :document.documentElement.scrollTop-100;
                           }
                  },0);

                 };
        },
    ////////// dowload///////////////////////////////////////////////////////////////////////////////////////////////////////
   "download":function(){
           var timer =null;
           var dl =document.getElementsByClassName('download')[0];
           var dlw =document.getElementsByClassName('downloadwindow')[0];
           var fl =document.getElementsByClassName('微信二维码')[0];
           var gt=document.getElementsByClassName('gift')[0];
               gt.onmouseover=function(){
                  clearTimeout(timer);
                 dlw.style.display='none';
            };

              dl.onmouseover=function(){
               clearTimeout(timer);
                 if(dlw.style.display=='block')
              {
                  return;
              };
            dlw.style.display='block';
               
            };

               dl.onmouseleave=function(){
                 clearTimeout(timer);
                 timer =setTimeout(function(){
                 dlw.style.display='none';
                 },300);
            };

            dlw.onmouseleave=function(){
                 clearTimeout(timer);
                 timer =setTimeout(function(){
                 dlw.style.display='none';
                 },300);
            };

   },
   ///课程栏/////////////////////////////////////////////////////////////////////////////////////////////////////////
   "sslac":function(){
            var clbar=document.getElementsByClassName('mylearn')[0];
           var cl=document.getElementsByClassName('learn')[0];
           var timer=null;
           cl.onmouseover=function(){
               clearTimeout(timer);
                 if(clbar.style.display=='block')
              {
                  return;
              };
            clbar.style.display='block';
            clbar.style.transform='scale(0.9)';
            clbar.style.transition='0.2s';
            setTimeout(function(){
                 clbar.style.transform='scale(1)';
            },0);
            };

            cl.onmouseleave=function(){
                 clearTimeout(timer);
                 timer =setTimeout(function(){
                 clbar.style.display='none';
                 },300);
            };

            clbar.onmouseleave=function(){
                 clearTimeout(timer);
                 timer =setTimeout(function(){
                 clbar.style.display='none';
                 },300);
            };


   },
    //用户栏/////////////////////////////////////////////////////////////////////////////////////////////////////////////
       "userbar":function(){
           var tx=document.getElementsByClassName('imgq')[0];
           var txbar=document.getElementsByClassName('user-ul')[0];
           var clbar=document.getElementsByClassName('mylearn')[0];
           var timer=null;
            tx.onmouseover=function(){
               clearTimeout(timer);
                 if(txbar.style.display=='block')
              {
                  return;
              };
            clbar.style.display='none';

            txbar.style.display='block';
            txbar.style.transform='scale(0.9)';
            txbar.style.transition='0.2s';
            setTimeout(function(){
                 txbar.style.transform='scale(1)';
            },0);
            };
            tx.onmouseout=function(){
                 clearTimeout(timer);
                 timer =setTimeout(function(){
                 txbar.style.display='none';
                 },300);
            };
            txbar.onmouseover=function(){
               clearTimeout(timer);
              txbar.style.display='block';
            };
            txbar.onmouseout=function(){
               clearTimeout(timer);
              timer =setTimeout(function(){
                 txbar.style.display='none';
                 },300);
            };

       },

   //搜索栏/////////////////////////////////////////////////////////////////////////////////////////////////////////////
   "search":function(){
var searchLeft=document.getElementsByClassName('searchNodeLeft')[0];
var searchLeftbar=document.getElementsByClassName('searchNodeLeft')[0].getElementsByTagName('ul')[0];
var searchinput=document.getElementsByClassName('searchNodeInput')[0];
var searchinputul=document.getElementsByClassName('searchNode-ul')[0];
var searchLeftbarchild=document.getElementsByClassName('searchNodeLeft')[0].getElementsByTagName('ul')[0].children;
var  searchtext=document.getElementsByClassName('searchNodeLeftText')[0];
var searchinputulChild =document.getElementsByClassName('searchNode-ul')[0].children;
var context ={'k':['政府','产品可视化','物联网','AI人工智能','大数据'],
               'w':['UDMY','复旦大学','北京大学','厦门大学','UCLA']
            };

        window.onclick =function(){
             searchinputul.style.display = 'none';
        };
       searchLeft.onmouseover = function(){
               if(event.target.nodeName =='DIV' || event.target.nodeName =='SPAN' )
               {
                  searchLeft.className='searchNodeLeft active';
               }
               else
               {
                  searchLeft.className='searchNodeLeft';
               }
       };

       searchLeft.onmouseout = function(){
         searchLeft.className='searchNodeLeft';
       };
          silderul('k');

       function silderul(text){
         var searchinputulChild =document.getElementsByClassName('searchNode-ul')[0].children;
           searchinputul.innerHTML ="<li class='first'>热门搜索</li>";
           searchinputulChild[0].onclick =function(){
           event.cancelBubble = true;
           };
           for(var i=0;i<context[text].length;i++)
          {
            var lili = document.createElement('li');
            lili.innerHTML ='<a href="#">'+context[text][i]+'</a>';
            searchinputul.appendChild(lili);
          }

           for(var i=1;i<searchinputulChild.length;i++)
           {
                  searchinputulChild[i].onclick =function(){
                       event.cancelBubble = true;
                      searchinputul.style.display = 'none';
                  };
           };
       };

         
        
           for(var i=0;i<searchLeftbarchild.length;i++)
          {

              searchLeftbarchild[i].onclick=function(){
               event.cancelBubble = true;
               for(var i=0;i<searchLeftbarchild.length;i++)
               {
                  searchLeftbarchild[i].className='';
               }

               searchtext.innerHTML = this.innerHTML;
                 if(this.innerHTML =='网校')
                 {
                  searchinput.placeholder='搜索网校';
                  silderul('w');
                 }
                 else
                 {
                  searchinput.placeholder='写轮眼,开！';
                   silderul('k');
                 }
               this.className='active';
               searchLeftbar.style.display='none';
               ulShow();
              }

          };

          function ulShow(){
            searchinputul.style.transition = '0.7s';
          searchinputul.style.opacity = '0';
         searchinputul.style.display = 'block';
         setTimeout(function(){
              searchinputul.style.opacity = '1';
         },0);

          };
        searchinput.onclick =function(){
         event.cancelBubble = true;
         ulShow();
      };

        searchLeft.onmouseenter=function(){
           
           searchLeftbar.style.display='block';
           searchinputul.style.display = 'none';
        };

        searchLeft.onmouseleave=function(){
           
           searchLeftbar.style.display='none';
        };
   },


   //公开课silder/////////////////////////////////////////////////////////////////////////////////////////////////////////////
"sildercontent":function(){
var cardLeft =document.getElementsByClassName('card-left')[0];
var cardRight =document.getElementsByClassName('card-right')[0];
var cardUl=document.getElementsByClassName('open-content-silder-card')[0];
cardLeft.style.display='none';
cardRight.onclick=function(){
   this.style.display='none';
   cardLeft.style.display='block';
   cardUl.style.left='-368px';
}
cardLeft.onclick=function(){
   this.style.display='none';
   cardRight.style.display='block';
   cardUl.style.left='10px';
}

},

//导航栏二级菜单效果制作/////////////////////////////////////////////////////////////////////////////////////////////////////////////
"secondaryMenuBar":function(){
var topBanner=document.getElementsByClassName('topBanner')[0];
var allLI = document.getElementsByClassName('banner');
var allShowOl=document.getElementsByClassName('active-ol');
var rightOL=document.getElementsByClassName('right-ol')[0];
for(var i=0;i<allLI.length;i++)
{
   allLI[i].onmouseover = function(){

         for(var i=0;i<allShowOl.length;i++)
         {
            allShowOl[i].style.display='none';
         }
         if(this.parentNode.getElementsByClassName('active-ol')[0])
         {
            this.parentNode.getElementsByClassName('active-ol')[0].style.display='block';
         }

   }
};

topBanner.onmouseleave = function(){
     for(var i=0;i<allShowOl.length;i++)
         {
            allShowOl[i].style.display='none';
         };
};

rightOL.onmouseenter = function(){
for(var i=0;i<allShowOl.length;i++)
         {
            allShowOl[i].style.display='none';
         };
};
},



// 轮播图内容/////////////////////////////////////////////////////////////////////////////////////////////////////////////
"silder":function(){
         var num =0;
         var setInterSlider;
	      var timer =null;
          var allSilderButton = document.getElementsByClassName('silder-content-button')[0];
          var allLi = allSilderButton.children;
          var silderContentNode =document.getElementsByClassName('silder-content')[0];
          var allsildercontent=document.getElementsByClassName('silder-content-UlNode')[0].children;
          var colorArr=['#000000','#3c2b21','#757f89','#32261a','#feec4c','#e6e6e6','#000000'];
          allsildercontent[0].style.opacity=1;
         
          for(var i=0;i<allLi.length;i++)
          {
          	allLi[i].index =i;
          	allLi[i].onmouseover = function(){
          		clearInterval(timer);
          		timer =setTimeout(function(){
          		move(this);
               go();
          	}.bind(this),500)
          };
      }
          function move(_this){

            num =_this.index;
             for(var i=0;i<allLi.length;i++)
                { 
                  allsildercontent[i].className = '';
                  allsildercontent[i].style.opacity = '0';
                  if(allLi[i].className.indexOf('first')!=-1)
                  {
                       allLi[i].className = 'first';
                  }
                  else
                  {
                     allLi[i].className = '';
                  }
                }
                 
                  allsildercontent[_this.index].className = 'active';
                  setTimeout(function(){
                     allsildercontent[this.index].style.opacity='1';
                 }.bind(_this),0);
                   _this.className+=' active';
                  silderContentNode.style.backgroundColor = colorArr[_this.index];
               
          };   
            
         go();
        function go(){
               clearInterval(setInterSlider);
              setInterSlider = setInterval(function(){
                num++;
                if(num == allLi.length)
                {
                  num = 0;
                };
               for(var i=0;i<allLi.length;i++)
                { 
                  allsildercontent[i].className = '';
                  allsildercontent[i].style.opacity = '0';
                  if(allLi[i].className.indexOf('first')!=-1)
                  {
                       allLi[i].className = 'first';
                  }
                  else
                  {
                     allLi[i].className = '';
                  }
                }
                  allsildercontent[num].className = 'active';
                  setTimeout(function(){
                     allsildercontent[num].style.opacity='1';
                 },0);
                   allLi[num].className+=' active';
                  silderContentNode.style.backgroundColor = colorArr[num];

          },5000);
        }
}
};

//函数调用/////////////////////////////////////////////////////////////////////////////////////////////////////////////
lun.changeInterest();
lun.qhslider();
lun.xdt();
lun.download();
lun.sslac();
lun.userbar();
lun.silder();
lun.secondaryMenuBar();
lun.sildercontent();
lun.search();
})();