window.onload = function(){
  var display = document.getElementsByClassName("clock");
  console.log(display);
  const tds=document.querySelectorAll('td');
  tds.forEach(function(td){
    var startTime, timer;
    td.onclick = start;
    function start(){ 
      td.onclick = null;
      startTime = new Date();
      timer = setInterval(function(){
       var now = new Date();
        display.innerHTML = ((now - startTime)/1000).toFixed(2); 
      }, 10); 
    }
  }); 
}