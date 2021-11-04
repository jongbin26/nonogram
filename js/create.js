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
  var temp=null;
  tds.forEach(function(td){
    if(td.classList.contains("black")){
      temp+="1";
    }
    else{
      temp+="0";
    }
  });
  //local storage에 저장
  var index=String(localStorage.length);
  temp=temp.substring(4);
  wrongpaint="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  if(temp!=wrongpaint)
    localStorage.setItem(index,temp);
  else
    window.alert("비어있는 도안입니다.");
  // 도안 지우기
  tds.forEach(function(td){
    td.classList.remove("black");
  });
});