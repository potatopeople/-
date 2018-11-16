window.onload = function(){               	//得到的标签后可用[]来指定标签的位置,这里为[0~8]。
    var list = document.getElementById('box').getElementsByTagName('div');
            for(var i = 0; i < list.length; i++){	//用循环来给每个div定义方法。
              list[i].draggable=true;
              list[i].ondragstart=divOnDragStart;
              list[i].ondragover=divOnDragOver;
              list[i].ondrop=divOnDrop;
          }      		
    }
    
    function divOnDragStart(){     //(格式,数据)
        event.dataTransfer.setData('srcId',event.target.id);
    }	//给dataTransfer赋一个拖动时触发的事件的id值，格式为'srcId'。
    
    function divOnDragOver(){
        event.preventDefault();
        //取消默认事件(这里指取消不能拖入的默认)
    }
    
    function divOnDrop(){
        event.preventDefault();//取消放下时的默认。  
        var srcId = event.dataTransfer.getData('srcId');//把dataTransfer的值给srcId。
        var srcNum = document.getElementById(srcId).id;//创建一个第三方对象。
        document.getElementById(srcId).id = event.target.id;								
                                  //放下时触发的元素的id。
        event.target.id = srcNum;
    }
    
    function my_ran(){
          var arr = [];
          var i = 0;
          var totalNum = 9;
          while(i < totalNum){
              var randomNum = parseInt(Math.random() * (10 - 1) + 1);  //1~9随机数
              if (checkExists(arr, randomNum)) { 
                  console.log( '产生一个 不 重复数：' + randomNum); 
                  arr[i] = randomNum;
                  Upset(arr[i],i);  //把产生的随机数给另外一个函数
                  i++;	
              }
              else {
                  console.log('产生一个 重 复数数：' + randomNum);
              }
          }
      }

      function Upset(arrys,j){
          var list = document.getElementById('box').getElementsByTagName('div');
              for(var i = j; i <= j; i++){
                  list[i].id = "div" + arrys;	  //把数组里的数给每个div标签的。
              }
      }

          //检查是否有重复数
      function checkExists(array, num) {
          for (var i = 0; i < array.length; ++i) {
              if (array[i] == num) { 
                  return false;
              }
          }
              return true;
      }
      
      function rest(){ 
          var list = document.getElementById('box').getElementsByTagName('div');
          for(var i = 0; i < 9; i++){
              list[i].id = "div" + (i + 1);
          }
      }
      
      function view(){
          var lists = document.getElementById('box').getElementsByTagName('div');
          if(lists[0].id == "div1" && lists[1].id == "div2" && lists[2].id == "div3" && lists[3].id == "div4" && lists[4].id == "div5" && lists[5].id == "div6" && lists[6].id == "div7" && lists[7].id == "div8" && lists[8].id == "div9"){
              alert("恭喜您拼图完成");
          }else{
              alert("抱歉您还没有完成拼图！");
          }
      }