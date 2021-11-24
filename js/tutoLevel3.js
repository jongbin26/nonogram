let level3=[
  {"name":"Butterfly","board":"0110000110100100100110001100011000110001011011011000101101000100110010100011000110010010010110000110"},
  {"name":"Calendar","board":"1111111111101000010110000000011001111001100100000110011110011000001001100111100110000000011111111111"},
  {"name":"Boat","board":"0000101000000011110000001011100000101111000011111100001011100000100000111111111101101101100011111100"},
  {"name":"TwoFace","board":"0011100011011110000101001011011100101100111110000011111000001101100100011001100101111000010011100011"},
  {"name":"Thumb","board":"0000111000000010100000001010000000101111111110000111010001111101000001110100011111010000011111111111"},
  {"name":"Speack","board":"0111111110110000001110101010011011101001101010100111000000110111100010000001011000001111000001100000"},
  {"name":"Deer","board":"1000000001101000010110100001011111111111000111100000101101000011111100001111110000011110001110110111"},
  {"name":"Speaker","board":"1111111111111001110111000101101000011010000001101000000110101000011010110001011011100111011111111111"},
  {"name":"Baseball","board":"0011111100010000001010100001011001001001100100100110010010011001001001101000010101000000100011111100"},
  {"name":"Car","board":"0011111100011000011001000000100100000010011111111011111111111001111001100111100111111111110110000110"},
  {"name":"Cart","board":"1100000000010000000001111111110010101010001111111000101010100010101010001111111000010001000010000010"},
  {"name":"Phone","board":"0011111100111111111111001100110001111000001111110001110011101110110111111011011111110011110111111110"},
  {"name":"Sun","board":"1100110011111011011101011110100011111100111100111111110011110011111100010111101011101101111100110011"},
  {"name":"Helicopter","board":"0001000000111111111000010000000011100000010111000111111110011111111111001000010011111111110000000000"}
];

function flevel3(){
    for(i=0;i<level3.length;i++){
        temp=level3[i].name;
    
        table="<table class=\"table\"><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr><td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr><tr>  <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td></tr></table>";
        size=10;
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
        litag.id= `tuto3li${i}`;
    
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



const lev3=document.querySelector(".level3");
lev3.addEventListener('click',function(){
  lev3.classList.add("focus");
  if(lev3.parentNode.children[0].classList.contains("focus"))
    lev3.parentNode.children[0].classList.remove("focus");
  if(lev3.parentNode.children[1].classList.contains("focus"))
    lev3.parentNode.children[1].classList.remove("focus");
  const gamelist=document.querySelector(".gamelist");
  gamelist.innerHTML="";
  flevel3();
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