// start html
for(i=0;i<localStorage.length;i++){
  temp="game"+(i+1);
  console.log(localStorage.getItem(parseInt(i)));
  if(localStorage.getItem(i).length==100)
    table="<table><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr></table>";
  else if(localStorage.getItem(i).length==64)
    table="<table>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr></table>";
  else if(localStorage.getItem(i).length==25)
    table="<table>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr></table>";
  const litag=document.createElement('li');
  const fronttag=document.createElement('div');
  const backtag=document.createElement('div');
  const previous=document.createElement('div');

  //하단 버튼
  const btns=document.createElement('div');
  const start_btn=document.createElement('div');
  const reset_btn=document.createElement('div');
  const submit_btn=document.createElement('div');
  start_btn.className="start";
  reset_btn.className="reset";
  submit_btn.className="submit";
  btns.append(start_btn, reset_btn, submit_btn);

  btns.className="btns";
  fronttag.className="front";
  backtag.className="back";
  previous.className="previous";

  fronttag.innerHTML=temp;
  backtag.innerHTML=table;
  previous.innerHTML="<";
  reset_btn.innerHTML="다시";
  start_btn.innerHTML="시작";
  submit_btn.innerHTML="제출";

  backtag.append(previous, btns);
  litag.append(fronttag, backtag);

  document.getElementsByClassName("gamelist")[0].append(litag);
}

const fronts=document.querySelectorAll('.front');
fronts.forEach(function(front){
  front.addEventListener('click',function(){
    front.nextSibling.classList.add('on');
  })
});

const previouses=document.querySelectorAll('.previous');
previouses.forEach(function(previous){
  previous.addEventListener('click',function(){
    previous.parentElement.classList.remove('on');
  })
});

//start html에서 td에 black class 추가
// create html에서 td 버튼
const tds=document.querySelectorAll('td');
tds.forEach(function(td){
  td.addEventListener('click',function(){
    if(td.classList.contains("black")){
      td.classList.remove('black');
    }else{
      if(td.classList.contains("no")){
        td.classList.remove('no');
      }
      td.classList.add('black');
    }
  })

  td.addEventListener('contextmenu', (event) => {
    event.preventDefault();          //delete contextbox 
    if(td.classList.contains("no")){
      td.classList.remove('no');
    }else{
      if(td.classList.contains("black")){
        td.classList.remove('black');
      }
      td.classList.add('no');
    }
  });
});  