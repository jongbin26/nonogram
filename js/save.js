// body=document.querySelector('body');
// var lv = sessionStorage.key(0);
// var username = JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).username;
// var time = JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).time;
// var sql=document.createElement('div');
// var sql_name = document.createElement('div');
// var sql_time = document.createElement('div');
// var sql_level = document.createElement('div');
// sql_name.innerHTML=username;
// sql_time.innerHTML=time;
// sql_level.innerHTML=lv;
// sql.className="sql";
// sql_name.className="name";
// sql_time.className="time";
// sql_level.className="level";
// sql.append(sql_level,sql_name,sql_time);
// body.append(sql);
// // sessionStorage.removeItem(sessionStorage.key(0));


var btns = document.querySelectorAll(".record");
btns.forEach(function(btn){
  btn.addEventListener("click", () => {
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

