let level2=[
  {"name":"Frog","board":"1001100110100101111001110010010000100100111001111010010110011001"},
  {"name":"Flower","board":"1110011110011001100110010110011001100110100110011001100111100111"},
  {"name":"Tree","board":"0001100000111100011111101111111101111110000110000001100000011000"},
  {"name":"Club","board":"1100000011100000011100000011100000011000000001000000001100000011"},
  {"name":"Water","board":"1111111101000010001111000000000000011000001001000010010000011000"},
  {"name":"Smile","board":"0011110001000010101001011000000110100101100110010100001000111100"},
  {"name":"Spanner","board":"0111111011111111110110111001100110000001110000111110011101100110"},
  {"name":"Dumbbell","board":"0001100001000010110110111111111111011011010110100001100000011000"},
  {"name":"Squid","board":"0001100000111100011111101101101111111111001111000111111010100101"},
  {"name":"Dancer","board":"1001100010011000011111100001100100011001001001001100001000000010"},
  {"name":"Rabbit","board":"10110011011111111100110011001100111111111011001100111111001100110"},
  {"name":"Punch","board":"1011110110111101000000000101101010011001000110000001100000011000"},
  {"name":"Heart","board":"0110011010011001100000011000000101000010010000100010010000011000"},
  {"name":"Trash","board":"0011110001100110111111110101101001011010010110100101101001111110"}
];

function flevel2(){
    for(i=0;i<level2.length;i++){
        temp=level2[i].name;
    
        table="<table class=\"table tutolevel2\">  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>  </tr></table>";
        size=8;
        firstTable = makeNumber(size,level1[i].board)[0];
        secondTable = makeNumber(size,level1[i].board)[1];
    
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
        litag.className="list";
        litag.id= `tuto2li${i}`;
    
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
    fronts.forEach(function (front) {
        front.addEventListener('click', function () {
            front.nextSibling.classList.add('on');
        })
    });

    const previouses = document.querySelectorAll('.previous');
    previouses.forEach(function (previous) {
        previous.addEventListener('click', function () {
            previous.parentElement.classList.remove('on');
        })
    });

    //start html에서 td에 black class 추가
    // create html에서 td 버튼
    var tds = document.querySelectorAll('.table td');
    tds.forEach(function (td) {

        //누르고 나서 event;
        td.addEventListener('click', function () {
            if (td.classList.contains("black")) {
                td.classList.remove('black');
            } else {
                if (td.classList.contains("no")) {
                    td.classList.remove('no');
                    td.innerHTML = "";
                }
                td.classList.add('black');
            }
        })

        td.addEventListener('contextmenu', (event) => {
            event.preventDefault();          //delete contextbox 
            if (td.classList.contains("no")) {
                td.classList.remove('no');
                td.innerHTML = "";
            } else {
                if (td.classList.contains("black")) {
                    td.classList.remove('black');
                }
                td.classList.add('no');
                td.innerHTML = "X";
            }
        });
    });

    //다시 버튼
    resets = document.querySelectorAll(".reset");
    resets.forEach(function (reset) {
        reset.addEventListener('click', function () {
            const tds = document.querySelectorAll('.table td');
            tds.forEach(function (td) {
                td.classList.remove("black");
                td.classList.remove("no");
                td.innerHTML = "";
            })
        })
    })

    clocks = document.querySelectorAll(".clock");
    clocks.forEach(function (clock) {
        clock.addEventListener('click', function () {
            var temp1 = clock.parentNode.nextSibling;
            var temp2 = clock.parentNode.nextSibling.nextSibling;
            temp1.classList.add("show");
            temp2.classList.add("show");
        })
    })
}



const lev2=document.querySelector(".level2");
lev2.addEventListener('click',function(){
  lev2.classList.add("focus");
  if(lev2.parentNode.children[0].classList.contains("focus"))
    lev2.parentNode.children[0].classList.remove("focus");
  if(lev2.parentNode.children[2].classList.contains("focus"))
    lev2.parentNode.children[2].classList.remove("focus");
  const gamelist=document.querySelector(".gamelist");
  gamelist.innerHTML="";
  flevel2();
});

function makeNumber(board, submit){
  // firsttable
  let firstTable = "<tbody>";
  let firstTableArray = [];
  let firstarray = [];
  for(n=0; n<board; n++){
    firstarray.push(n);
  }
  // 배열에 숫자 추가
  for(l=0; l<Math.ceil(board/2); l++){
    for(j=0; j<board; j++){
      let num = "";
      let temp = 0;

      while(submit[firstarray[j]]=="0"){
        firstarray[j] += board;
      }

      while(submit[firstarray[j]]=="1"){
        temp += 1;
        firstarray[j] += board;
      }
      num=temp;
      if(temp==0) num="";
      firstTableArray.push(num);
    }
  }
  let row = Math.ceil(board/2);
  // 아래정렬
  for(l=0; l<board; l++){
    let firstIndex = 0;
    let first = false;
    let lastRowIndex = l+board*(row-1); 
    if(firstTableArray[l] != ""){
      for(j=l; j<=lastRowIndex; j+=board){
        if(firstTableArray[j] == ""){
          firstIndex = j-board;
          first = true;
          break;
        }
      }
      if(first == true){
        for(j=firstIndex; j>=0; j-=board){
          firstTableArray[lastRowIndex] = firstTableArray[j];
          firstTableArray[j] = "";
          lastRowIndex-=board;
        }
      }
        
    }
  }
  // 테이블 생성
  for(l=0; l<row; l++){
    firstTable += '<tr>';
    for(j=0; j<board; j++){
      firstTable += `<td>${firstTableArray[l*board+j]}</td>`;
    }
    firstTable += '</tr>';
  }
  firstTable += '</tbody>';

  // secondTable
  let secondTable = "<tbody>";
  let secondTableArray = [];
  let secondarray = [];
  for(n=0; n<board; n++){
    secondarray.push(n*board);
  }

  for(l=0; l<board; l++){
    let checkLastCol = secondarray[l]+board;

    for(j=0; j<Math.ceil(board/2); j++){
      let temp = 0;
      let num = "";
      while(submit[secondarray[l]]=="0"){
        secondarray[l] += 1;
        if(secondarray[l]>=checkLastCol) {
          break;
        }
      }

      while(submit[secondarray[l]]=="1"){
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
  let col = Math.ceil(board/2);
  // 오른쪽 정렬
  for(l=0; l<=board*col; l+=col){
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
  for(l=0; l<board; l++){
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