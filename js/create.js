create();
// level btn
board=document.querySelector('.board');
level1=document.querySelector('.level1');
level2=document.querySelector('.level2');
level3=document.querySelector('.level3');
console.log(board);
level1.addEventListener('click',function(){
  board.innerHTML="<table>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr></table>";
  create();
});
level2.addEventListener('click',function(){
  board.innerHTML="<table>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr></table>";
  create();
});
level3.addEventListener('click',function(){
  board.innerHTML="<table><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr></table>";
  create();
});
function create(){ 
  // create html에서 td 버튼
  const tds=document.querySelectorAll('td');
  tds.forEach(function(td){
    td.addEventListener('click',function(){
      if(td.classList.contains("black")){
        td.classList.remove('black');
      }else{
        td.classList.add('black');
      }
    })
  });  

  // create html에서 추가 버튼
  const plus=document.querySelector(".plus");
  plus.addEventListener('click',function(){
    var temp=0;
    console.log(temp);
    tds.forEach(function(td){
      if(td.classList.contains("black")){
        temp+="1";
      }
      else{
        temp+="0";
      }
    });
    //local storage에 저장
    if (isUnValidMap(temp.substring(1))) {
      return ;
    }
    var index=String(localStorage.length);
    temp=temp.substring(1);
    console.log(temp);
    localStorage.setItem(index,temp);
    tds.forEach(function(td){
      td.classList.remove("black");
    });
  });
}

function isUnValidMap (board) {
  return board.split('')
            .every(function (v)
            {
              return v === '0';
            });
}