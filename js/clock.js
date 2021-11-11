window.onload = function(){
  const clocks=document.querySelectorAll('.clock');
  console.log(clocks);
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
    }
  }); 
}