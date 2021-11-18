// start html
for(i=0;i<localStorage.length;i++){
  temp="game"+(i+1);
  if(localStorage.getItem(i).length==100){
    table="<table class=\"table\"><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr></table>";
    var obj = {
      local : i,
      num : 10
    };
    firstTable = makeNumber(obj)[0];
    secondTable = makeNumber(obj)[1];
  }
  else if(localStorage.getItem(i).length==64){
    table="<table class=\"table\">  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr></table>";
    var obj = {
      local : i,
      num : 8
    };
    firstTable = makeNumber(obj)[0];
    secondTable = makeNumber(obj)[1];
  }
  else if(localStorage.getItem(i).length==25){
    table="<table class=\"table\">  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr></table>";
    var obj = {
      local : i,
      num : 5
    };
    firstTable = makeNumber(obj)[0];
    secondTable = makeNumber(obj)[1];
  }
  const litag=document.createElement('li');
  const fronttag=document.createElement('div');
  const backtag=document.createElement('div');
  const previous=document.createElement('div');
  const upTable=document.createElement('table');
  const leftTable=document.createElement('table');
  upTable.className="upTable";
  leftTable.className="leftTable";
  upTable.innerHTML=firstTable;
  leftTable.innerHTML=secondTable;

  //하단 버튼
  const btns=document.createElement('div');
  const clock_btn=document.createElement('div');
  const reset_btn=document.createElement('div');
  const submit_btn=document.createElement('div');
  clock_btn.className="clock";
  reset_btn.className="reset";
  submit_btn.className="submit";
  btns.append(reset_btn, clock_btn, submit_btn);

  btns.className="btns";
  fronttag.className="front";
  backtag.className="back";
  previous.className="previous";

  fronttag.innerHTML=temp;
  backtag.innerHTML=table;
  previous.innerHTML="x";
  reset_btn.innerHTML="reset";
  clock_btn.innerHTML="start";
  submit_btn.innerHTML="submit";

  backtag.append(previous, btns, upTable, leftTable);
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
var tds=document.querySelectorAll('td');
tds.forEach(function(td){

  //누르고 나서 event;
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

//다시 버튼
resets=document.querySelectorAll(".reset");
resets.forEach(function(reset){
  reset.addEventListener('click',function(){
    const tds=document.querySelectorAll('td');
    tds.forEach(function(td){
      td.classList.remove("black");
      td.classList.remove("no");
    })
  })
})

clocks=document.querySelectorAll(".clock");
clocks.forEach(function(clock){
  clock.addEventListener('click',function(){
    var temp1=clock.parentNode.nextSibling;
    var temp2=clock.parentNode.nextSibling.nextSibling;
    temp1.classList.add("show");
    temp2.classList.add("show");
  })
})


//숫자 대입
function makeNumber(obj){
  // firsttable
  let firstTable = "<tbody>";
  let firstTableArray = [];
  let firstarray = [];
  for(n=0; n<obj.num; n++){
    firstarray.push(n);
  }
  // 배열에 숫자 추가
  for(l=0; l<Math.ceil(obj.num/2); l++){
    for(j=0; j<obj.num; j++){
      let num = "";
      let temp = 0;

      while(localStorage.getItem(obj.local)[firstarray[j]]=="0"){
        firstarray[j] += obj.num;
      }

      while(localStorage.getItem(obj.local)[firstarray[j]]=="1"){
        temp += 1;
        firstarray[j] += obj.num;
      }
      num=temp;
      if(temp==0) num="";
      firstTableArray.push(num);
    }
  }
  let row = Math.ceil(obj.num/2);
  // 아래정렬
  for(l=0; l<obj.num; l++){
    let firstIndex = 0;
    let first = false;
    let lastRowIndex = l+obj.num*(row-1); 
    if(firstTableArray[l] != ""){
      for(j=l; j<=lastRowIndex; j+=obj.num){
        if(firstTableArray[j] == ""){
          firstIndex = j-obj.num;
          first = true;
          break;
        }
      }
      if(first == true){
        for(j=firstIndex; j>=0; j-=obj.num){
          firstTableArray[lastRowIndex] = firstTableArray[j];
          firstTableArray[j] = "";
          lastRowIndex-=obj.num;
        }
      }
        
    }
  }
  // 테이블 생성
  for(l=0; l<row; l++){
    firstTable += '<tr>';
    for(j=0; j<obj.num; j++){
      firstTable += `<td>${firstTableArray[l*obj.num+j]}</td>`;
    }
    firstTable += '</tr>';
  }
  firstTable += '</tbody>';

  // secondTable
  let secondTable = "<tbody>";
  let secondTableArray = [];
  let secondarray = [];
  for(n=0; n<obj.num; n++){
    secondarray.push(n*obj.num);
  }

  for(l=0; l<obj.num; l++){
    let checkLastCol = secondarray[l]+obj.num;

    for(j=0; j<Math.ceil(obj.num/2); j++){
      let temp = 0;
      let num = "";
      while(localStorage.getItem(obj.local)[secondarray[l]]=="0"){
        secondarray[l] += 1;
        if(secondarray[l]>=checkLastCol) {
          break;
        }
      }

      while(localStorage.getItem(obj.local)[secondarray[l]]=="1"){
        if(secondarray[l]>=checkLastCol) {
          break;
        }
        temp += 1;
        secondarray[l] += 1;
        if(secondarray[l]>=checkLastCol) {
          break;
        }
      }
      num=temp;
      if(temp==0) num="";
      secondTableArray.push(num);
    }
  }
  let col = Math.ceil(obj.num/2);
  // 오른쪽 정렬
  for(l=0; l<=obj.num*col; l+=col){
    let secondIndex = 0;
    let lastColIndex = l+col-1; 
    let second = false;
    if(secondTableArray[l] != ""){
      for(j=l; j<=lastColIndex; j++){
        if(secondTableArray[j] == ""){
          secondIndex = j-1;
          second = true;
          break;
        }
      }
      if(second == true){
        for(j=secondIndex; j>=l; j--){
          secondTableArray[lastColIndex] = secondTableArray[j];
          secondTableArray[j] = "";
          lastColIndex--;
        }
      }
    }
  }
  // 테이블 생성
  for(l=0; l<obj.num; l++){
    secondTable += '<tr>';
    for(j=0; j<col; j++){
      secondTable += `<td>${secondTableArray[l*col+j]}</td>`;
    }
    secondTable += '</tr>';
  }
  secondTable += '</tbody>';

  let tableArray = [firstTable, secondTable];
  return tableArray;
}