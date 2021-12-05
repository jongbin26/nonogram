save();
function save(){
  var btns = document.querySelectorAll(".record");
  btns.forEach(function(btn){
    btn.addEventListener("click", () => {
      console.log('click');
      //XMLHttpRequest 객체 생성
      var xhr = new XMLHttpRequest();
  
      var lv = sessionStorage.key(0);
      var username = JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).username;
      var time = JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).time;
  
      //요청을 보낼 방식, 주소, 비동기여부 설정
      xhr.open('GET', `./tuto.php?lv=${lv}&name=${username}&time=${time}`, true);
      //요청 전송
      xhr.send();
      //통신후 작업
      xhr.onload = () => {
        //통신 성공
        if (xhr.status == 200) {
          console.log(xhr.response);
          console.log("통신 성공"); 
        } else {
          //통신 실패
          console.log("통신 실패");
        }
      }
      sessionStorage.removeItem(sessionStorage.key(0));
    });
  });
}

const levelone=document.querySelector('.level1');
const leveltwo=document.querySelector('.level2');
const levelthree=document.querySelector('.level3');
levelone.addEventListener('click',function(){
  save();
});
leveltwo.addEventListener('click',function(){
  save();
});
levelthree.addEventListener('click',function(){
  save();
});