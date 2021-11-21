window.onload = function(){
  const clocks=document.querySelectorAll('.clock');
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

      //제출 버튼
      const submits=document.querySelectorAll(".submit");
      submits.forEach(function(submit){ 
        submit.addEventListener('click',function(){
          var temp=0;
          grandParentNode=submit.parentNode.parentNode;
          tds=grandParentNode.querySelectorAll(".table td");
          tds.forEach(function(td){
            if(td.classList.contains("black")){
              temp+="1";
            }
            else{
              temp+="0";
            }
          });
          temp=temp.substring(1);
          if(temp.length==100){
            var board=10;
          }else if(temp.length==64){
            var board=8;
          }else if(temp.length==25){
            var board=5;
          } 
          var doubleSubmitFlag = false;
          if((checkAnswer(board,temp)[0]==grandParentNode.childNodes[3].innerHTML)&&(checkAnswer(board,temp)[1]==grandParentNode.childNodes[4].innerHTML)){
            if(doubleSubmitCheck()){
              alert("정답입니다!");
              clearInterval(timer);
            }
          }else{
            if(doubleSubmitCheck()){
              alert("오답입니다ㅠㅠ");
            }
          }
        });
      })

    }
  }); 
}


//정답체크
function checkAnswer(board, submit){
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

//alert duplicate
var doubleSubmitFlag = false;
function doubleSubmitCheck(){
  if(doubleSubmitFlag){
    return doubleSubmitFlag;
  }else{
    doubleSubmitFlag = true;
    return false;
  }
}
