window.onload = function(){
  const lis=document.querySelectorAll('li');
  lis.forEach(function(li){
    var startTime, timer;
    li.onclick = start;
    function start(){ 
      li.onclick = null;
      startTime = new Date();
      timer = setInterval(function(){
        var now = new Date();
        li.children[1].children[2].children[1].innerHTML = ((now - startTime)/1000).toFixed(2);
      }, 10); 
    }
  }); 
}