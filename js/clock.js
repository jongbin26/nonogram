window.onload = function(){
  const clocks=document.querySelectorAll('.clock');
  clocks.forEach(function(clock){
    var startTime, timer;
    clock.onclick = start;
    function start(){ 
      clock.onclick = null;
      startTime = new Date();
      timer = setInterval(function(){
        var now = new Date();
        clock.innerHTML = ((now - startTime)/1000).toFixed(2);
      }, 10); 

      //제출 버튼
      const submits=document.querySelectorAll(".submit");
      submits.forEach(function(submit){ 
        submit.addEventListener('click',function(){
          var temp=0;
          grandParentNode=submit.parentNode.parentNode;
          tds=grandParentNode.querySelectorAll(".table td");
          tds.forEach(function(td){
            if(td.classList.contains("black")){
              temp+="1";
            }
            else{
              temp+="0";
            }
          });
          temp=temp.substring(1);
          var text=grandParentNode.previousSibling.innerHTML;
          text=parseInt(text.substring(4)-1);
          var answer=localStorage.getItem(text);
          if(temp==answer){
            alert("정답입니다!");
            clearInterval(timer);
          }else{
            alert("오답입니다ㅠㅠ");
          }
        });
      })

    }
  }); 
}