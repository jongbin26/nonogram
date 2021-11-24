let level1=[
    {"name":"Stair","board":"0000100011001110111111111"},
    {"name":"Anchor","board":"0010001010001001010101110"},
    {"name":"Rhombus","board":"0010001110111110111000100"},
    {"name":"Tomb","board":"0010001110001000111011111"},
    {"name":"Hash","board":"0101011111010101111101010"},
    {"name":"Airplane","board":"0010011111111110010001110"},
    {"name":"Cactus","board":"1010110101111110010000100"},
    {"name":"T","board":"1111110101001000010001110"},
    {"name":"X","board":"1101101110001000111011011"},
    {"name":"Flower","board":"0111010001011100010011111"},
    {"name":"Point","board":"1111110001101011000111111"},
    {"name":"Plus","board":"0111011011100011101101110"},
    {"name":"Skull","board":"1111110101111110101000000"},
    {"name":"Arrow","board":"0010001110101010010000100"}
  
  ];

const gamelist=document.querySelector(".gamelist");
gamelist.innerHTML="";
flevel1();
function flevel1(){
    for(i=0;i<level1.length;i++){
        temp=level1[i].name;
    
        table="<table class=\"table tutolevel1\">  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr>  <tr>    <td></td><td></td><td></td><td></td><td></td>  </tr></table>";
        size=5;
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
        litag.id= `tuto1li${i}`;
    
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



  const lev1=document.querySelector(".level1");
  lev1.classList.add("focus");
  lev1.addEventListener('click',function(){
    console.log("level1 클릭");
    lev1.classList.add("focus");
    if(lev1.parentNode.children[1].classList.contains("focus"))
      lev1.parentNode.children[1].classList.remove("focus");
    if(lev1.parentNode.children[2].classList.contains("focus"))
      lev1.parentNode.children[2].classList.remove("focus");
    const gamelist=document.querySelector(".gamelist");
    gamelist.innerHTML="";
    flevel1();
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